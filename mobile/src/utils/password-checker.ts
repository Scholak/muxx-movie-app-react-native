// Package Imports
import { z, ZodIssue } from 'zod'

// Utility Imports
import { customValidationMessage } from '@/src/utils/custom-validation-message'

type ISamePasswordValidationData = {
	password: string
	passwordConfirmation: string
}

type ISamePasswordValidationCtx = {
	addIssue: (issue: ZodIssue) => void
}

export const samePasswordValidation = (data: ISamePasswordValidationData, ctx: ISamePasswordValidationCtx) => {
	if (data.password !== data.passwordConfirmation) {
		ctx.addIssue({
			path: ['passwordConfirmation'],
			message: customValidationMessage('Passwords', 'same'),
			code: z.ZodIssueCode.custom,
		})
	}
}
