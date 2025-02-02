// Package Imports
import path from 'path'
import dotenv from 'dotenv'
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

// Config Imports
import { registerCronJobs } from './config/register.cron-jobs'
import { registerRoutes } from './config/register-routes'

registerCronJobs()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
	res.json({ message: 'pong' })
})
app.use('/api', registerRoutes)

// app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
