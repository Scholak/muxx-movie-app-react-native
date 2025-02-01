import { z, ZodIssue } from 'zod'

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
			message: 'Passwords do not match',
			code: z.ZodIssueCode.custom,
		})
	}
}
