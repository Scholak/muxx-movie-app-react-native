// Package Imports
import { Router } from 'express'

// Route Imports
import { authRoutes } from '@domains/auth/auth.route'

export const registerRoutes = Router()

registerRoutes.use('/auth', authRoutes)
