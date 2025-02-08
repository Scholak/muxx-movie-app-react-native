// Package Imports
import { z, ZodType } from 'zod'

// Utility Imports
import { samePasswordValidation } from '@/src/utils/password-checker'
import { customValidationMessage } from '@/src/utils/custom-validation-message'

// Type Imports
import { ISignUpSchema, ISignInSchema, IResetPasswordSchema, IForgotPasswordSchema } from '@/src/types/auth-types'

export const signUpSchema: ZodType<ISignUpSchema> = z
	.object({
		email: z
			.string()
			.min(1, customValidationMessage('Email', 'required'))
			.email(customValidationMessage('Email', 'email'))
			.toLowerCase()
			.trim(),
		password: z
			.string()
			.min(1, customValidationMessage('Password', 'required'))
			.min(8, customValidationMessage('Password', 'min', { min: '8' }))
			.trim(),
		passwordConfirmation: z.string().min(1, customValidationMessage('Password Confirmation', 'required')).trim(),
		termsAndConditions: z
			.boolean()
			.refine(value => value, { message: customValidationMessage('Terms and conditions', 'required') }),
		privacyPolicy: z
			.boolean()
			.refine(value => value, { message: customValidationMessage('Privacy and policy', 'required') }),
	})
	.superRefine(samePasswordValidation)

export const signInSchema: ZodType<ISignInSchema> = z.object({
	email: z
		.string()
		.min(1, customValidationMessage('Email', 'required'))
		.email(customValidationMessage('Email', 'email'))
		.toLowerCase()
		.trim(),
	password: z.string().min(1, customValidationMessage('Password', 'required')).trim(),
})

export const forgotPasswordSchema: ZodType<IForgotPasswordSchema> = z.object({
	email: z
		.string()
		.min(1, customValidationMessage('Email', 'required'))
		.email(customValidationMessage('Email', 'email'))
		.toLowerCase()
		.trim(),
})

export const resetPasswordSchema: ZodType<IResetPasswordSchema> = z
	.object({
		code: z
			.string()
			.min(1, customValidationMessage('Code', 'required'))
			.length(8, customValidationMessage('Code', 'length', { length: '8' })),
		password: z
			.string()
			.min(1, customValidationMessage('Password', 'required'))
			.min(8, customValidationMessage('Password', 'min', { min: '8' }))
			.trim(),
		passwordConfirmation: z.string().min(1, customValidationMessage('Password Confirmation', 'required')).trim(),
	})
	.superRefine(samePasswordValidation)
