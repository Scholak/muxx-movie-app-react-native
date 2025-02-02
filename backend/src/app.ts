// Package Imports
import path from 'path'
import dotenv from 'dotenv'
import cron from 'node-cron'
import moduleAlias from 'module-alias'
import express, { Request, Response } from 'express'
import errorHandler from './middlewares/error.middleware'

dotenv.config()

moduleAlias.addAliases({
	'@domains': path.resolve(__dirname, './domains'),
	'@jobs': path.resolve(__dirname, './jobs'),
	'@lib': path.resolve(__dirname, './lib'),
	'@middlewares': path.resolve(__dirname, './middlewares'),
	'@types': path.resolve(__dirname, './types'),
	'@utils': path.resolve(__dirname, './utils'),
})

// Domain Imports
import { authRoutes } from '@domains/auth/auth.route'

// Job Imports
import { clearExpiredCodes } from '@jobs/clear-expired-codes.job'

// Daily
cron.schedule('0 0 * * *', clearExpiredCodes)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
	res.json({ message: 'pong' })
})
app.use('/api/auth', authRoutes)

// app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
