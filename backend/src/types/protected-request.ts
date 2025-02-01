import { Request } from 'express'
import { IUser } from '../domains/auth/auth.types'

export type ProtectedRequest = Request & {
	user?: IUser
}
