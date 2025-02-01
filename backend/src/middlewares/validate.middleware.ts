import { Request, Response, NextFunction } from 'express'
import { z, ZodError, ZodIssue } from 'zod'

export function validate<T>(schema: z.ZodSchema<T>) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body)
			next()
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue: ZodIssue) => ({
					message: `${issue.path.join('.')} is ${issue.message}`,
				}))
				res.status(400).json({ error: 'Validation Error', details: errorMessages })
			} else {
				res.status(500).json({ error: 'Internal Server Error' })
			}
		}
	}
}
