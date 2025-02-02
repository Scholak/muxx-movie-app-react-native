// Package Imports
import { jwtVerify } from 'jose'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'secret')

export const verifyToken = async <T>(token: string) => {
	try {
		const { payload } = await jwtVerify(token, secretKey)
		return payload as T
	} catch (error) {
		throw new Error('Invalid or expired token')
	}
}
