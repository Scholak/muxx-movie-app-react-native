// Package Imports
import { Router } from 'express'

// Middleware Imports
import { auth } from '@middlewares/auth.middleware'
import { validate } from '@middlewares/validate.middleware'

// Service Imports
import { forgotPassword, getAuth, resetPassword, signIn, signUp } from '@domains/auth/auth.controller'
import { forgotPasswordSchema, resetPasswordSchema, signInSchema, signUpSchema } from '@domains/auth/auth.validation'

// Type Imports
import { IForgotPasswordSchema, IResetPasswordSchema, ISignInSchema, ISignUpSchema } from './auth.types'

export const authRoutes = Router()

authRoutes.post('/sign-up', validate<ISignUpSchema>(signUpSchema), signUp)
authRoutes.post('/sign-in', validate<ISignInSchema>(signInSchema), signIn)
authRoutes.post('/forgot-password', validate<IForgotPasswordSchema>(forgotPasswordSchema), forgotPassword)
authRoutes.post('/reset-password', validate<IResetPasswordSchema>(resetPasswordSchema), resetPassword)
authRoutes.get('/me', auth, getAuth)
