export enum SUBSCRIPTION {
	MONTHLY = 'MONTHLY',
	YEARLY = 'YEARLY',
}

export type ISubscription = 'MONTHLY' | 'YEARLY'

export type IUser = {
	id: number
	email: string
	password: string
	subscription: ISubscription
	createdAt: string
	updatedAt: string
}

export type ISignUpSchema = {
	email: string
	password: string
	passwordConfirmation: string
	subscription: ISubscription
}

export type ISignInSchema = {
	email: string
	password: string
}

export type IForgotPasswordSchema = {
	email: string
}

export type IResetPasswordSchema = {
	code: string
	password: string
	passwordConfirmation: string
}
