import express from 'express'
import dotenv from 'dotenv'
import errorHandler from './middlewares/error.middleware'
import { authRoutes } from './domains/auth/auth.route'
import cron from 'node-cron'
import { clearExpiredCodes } from './jobs/clear-expired-codes.job'

dotenv.config()

// Daily
cron.schedule('0 0 * * *', clearExpiredCodes)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/auth', authRoutes)

// app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
