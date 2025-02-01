import { Request, Response, NextFunction } from 'express'

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		success: false,
		message: 'Internal Server Error',
		error: error.message,
	})
}

export default errorHandler
