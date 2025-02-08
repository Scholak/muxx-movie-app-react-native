// Package Imports
import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import dayjs from 'dayjs'
import bcrypt from 'bcrypt'

// Library Imports
import { mailer } from '@lib/mailer'
import { prisma } from '@lib/prisma'

// Utility Imports
import { signToken } from '@utils/sign-token'
import { generateCode } from '@utils/code-generator'

// Type Imports
import { ProtectedRequest } from '../../types/protected-request'

export const signUp = async (req: Request, res: Response) => {
	try {
		const data = req.body

		data.password = await bcrypt.hash(data.password, 10)
		delete data.passwordConfirmation

		const signedUpUser = await prisma.user.create({ data })

		const token = await signToken(data)

		res.status(201).json({ message: 'User signed up successfully!', signedUpUser, token })
	} catch (error: any) {
		if (error?.name === 'PrismaClientKnownRequestError' && error?.code === 'P2002')
			res.status(400).json({ error: 'This email is already in use!' })
		else res.status(500).json({ error: 'Internal Server Error!' })
	}
}

export const signIn = async (req: Request, res: Response) => {
	try {
		const data = req.body

		const signedInUser = await prisma.user.findFirst({ where: { email: data.email } })

		if (!signedInUser) {
			res.status(404).json({ error: 'User does not exist!' })
			return
		}

		const check = await bcrypt.compare(data.password, signedInUser.password)

		if (!check) {
			res.status(400).json({ error: 'Incorrect password!' })
			return
		}

		const token = await signToken(data)

		res.status(200).json({ message: 'User signed in successfully!', signedInUser, token })
	} catch (error: any) {
		res.status(500).json({ error: 'Internal Server Error!' })
	}
}

export const getAuth = async (req: ProtectedRequest, res: Response) => {
	try {
		const userId = req.user?.id

		const user = await prisma.user.findFirst({ where: { id: userId } })

		if (user) res.status(200).json({ user })
		else res.status(404).json({ user: null, message: 'User not found' })
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error!' })
	}
}

export const forgotPassword = async (req: Request, res: Response) => {
	try {
		const data = req.body

		const user = await prisma.user.findFirst({ where: { email: data.email } })

		if (!user) {
			res.status(404).json({ error: 'User does not exist!' })
			return
		}

		const code = generateCode(8)

		const templatePath = path.join(__dirname, '../../emails/reset-password.html')
		let template = fs.readFileSync(templatePath, 'utf8')

		template = template.replace('{{email}}', user.email)
		template = template.replace('{{code}}', code)

		const mailOptions = {
			from: 'muxx@gmail.com',
			to: user.email,
			subject: 'Password Reset Request',
			html: template,
		}
		await mailer.sendMail(mailOptions)

		const codeData = {
			userId: user.id,
			code,
			expiredAt: dayjs().add(7, 'days').toDate(),
		}

		await prisma.resetPasswordCode.create({
			data: codeData,
		})

		res.status(200).json({ message: 'Reset password email has been sent!' })
	} catch (error: any) {
		res.status(500).json({ error: 'Internal Server Error!' })
	}
}

export const resetPassword = async (req: Request, res: Response) => {
	try {
		const data = req.body

		const code = await prisma.resetPasswordCode.findUnique({ where: { code: data.code } })

		if (!code) {
			res.status(400).json({ error: 'Invalid code!' })
			return
		}

		const user = await prisma.user.findFirst({
			where: { id: code.userId },
		})

		if (!user) {
			res.status(400).json({ error: 'Deleted user!' })
			return
		}

		const userData = {
			password: await bcrypt.hash(data.password, 10),
		}

		const deleteCodePromise = prisma.resetPasswordCode.delete({ where: { id: code.id } })
		const updateUserPromise = prisma.user.update({
			where: { id: user.id },
			data: userData,
		})

		await Promise.all([updateUserPromise, deleteCodePromise])

		res.status(201).json({ message: 'Password has been reset successfully!', user })
	} catch (error: any) {
		res.status(500).json({ error: 'Internal Server Error!' })
	}
}
