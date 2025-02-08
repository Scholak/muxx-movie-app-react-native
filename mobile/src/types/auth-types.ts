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

export type ISignUpData = {
	email?: string
	password?: string
	passwordConfirmation?: string
	subscription?: ISubscription
}

export type ISignUpSchema = {
	email: string
	password: string
	passwordConfirmation: string
	termsAndConditions?: boolean
	privacyPolicy?: boolean
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
	message: string
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
