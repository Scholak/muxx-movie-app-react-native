// Package Imports
import { Request } from 'express'

// Type Imports
import { IUser } from '@domains/auth/auth.types'

export type ProtectedRequest = Request & {
	user?: IUser
}
