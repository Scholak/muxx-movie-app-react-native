import { z, ZodType } from 'zod'
import { ISignUpSchema, ISignInSchema, SUBSCRIPTION, IForgotPasswordSchema, IResetPasswordSchema } from './auth.types'
import { samePasswordValidation } from '../../utils/password-checker'

export const signUpSchema: ZodType<ISignUpSchema> = z
	.object({
		email: z.string().min(1).email(),
		password: z.string().min(8),
		passwordConfirmation: z.string().min(8),
		subscription: z.nativeEnum(SUBSCRIPTION),
	})
	.superRefine(samePasswordValidation)

export const signInSchema: ZodType<ISignInSchema> = z.object({
	email: z.string().min(1).email(),
	password: z.string().min(8),
})

export const forgotPasswordSchema: ZodType<IForgotPasswordSchema> = z.object({
	email: z.string().min(1).email(),
})

export const resetPasswordSchema: ZodType<IResetPasswordSchema> = z
	.object({
		code: z.string(),
		password: z.string().min(8),
		passwordConfirmation: z.string().min(8),
	})
	.superRefine(samePasswordValidation)
