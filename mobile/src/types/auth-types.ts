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

export type ISignUpResponse = {
	message: string
	signedUpUser: IUser
	token: string
}

export type ISignInSchema = {
	email: string
	password: string
}

export type ISignInResponse = {
	message: string
	signedInUser: IUser
	token: string
}

export type IForgotPasswordSchema = {
	email: string
}

export type IForgotPasswordResponse = {
	email: string
}

export type IResetPasswordSchema = {
	code: string
	password: string
	passwordConfirmation: string
}

export type IResetPasswordResponse = {
	code: string
	password: string
	passwordConfirmation: string
}
