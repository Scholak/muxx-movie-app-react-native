// Package Imports
import cron from 'node-cron'

// Job Imports
import { clearExpiredCodes } from '@jobs/clear-expired-codes.job'

export const registerCronJobs = () => {
	// Clears expired reset password codes daily
	cron.schedule('0 0 * * *', clearExpiredCodes)
}
