// Package Imports
import { z, ZodType } from 'zod'

// Utility Imports
import { samePasswordValidation } from '@/src/utils/password-checker'

// Type Imports
import {
	SUBSCRIPTION,
	ISignUpSchema,
	ISignInSchema,
	IResetPasswordSchema,
	IForgotPasswordSchema,
} from '@/src/types/auth-types'

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
