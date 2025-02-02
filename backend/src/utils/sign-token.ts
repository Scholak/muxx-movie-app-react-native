// Package Imports
import { JWTPayload, SignJWT } from 'jose'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'secret')

export const signToken = async (payload: JWTPayload, exp: number | string | Date = '1d'): Promise<string> => {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(exp)
		.sign(secretKey)
}
