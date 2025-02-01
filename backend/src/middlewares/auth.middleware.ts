import { Response, NextFunction } from 'express'
import { verifyToken } from '../utils/verify-token'
import { IUser } from '@/domains/auth/auth.types'
import { ProtectedRequest } from '@/types/protected-request'

export const auth = async (req: ProtectedRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		res.status(401).json({ success: false, message: 'Unauthorized: No token provided' })
		return
	}

	const token = authHeader.split(' ')[1]

	try {
		const decoded = await verifyToken<IUser>(token)
		req.user = decoded
		next()
	} catch (error) {
		res.status(401).json({ success: false, message: 'Unauthorized: Invalid or expired token' })
	}
}
