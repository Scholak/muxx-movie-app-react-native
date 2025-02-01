import { Router } from 'express'
import { forgotPasswordSchema, resetPasswordSchema, signInSchema, signUpSchema } from './auth.validation'
import { forgotPassword, getAuth, resetPassword, signIn, signUp } from './auth.controller'
import { IForgotPasswordSchema, IResetPasswordSchema, ISignInSchema, ISignUpSchema } from './auth.types'
import { validate } from '../../middlewares/validate.middleware'
import { auth } from '../../middlewares/auth.middleware'

export const authRoutes = Router()

authRoutes.post('/sign-up', validate<ISignUpSchema>(signUpSchema), signUp)
authRoutes.post('/sign-in', validate<ISignInSchema>(signInSchema), signIn)
authRoutes.post('/forgot-password', validate<IForgotPasswordSchema>(forgotPasswordSchema), forgotPassword)
authRoutes.post('/reset-password', validate<IResetPasswordSchema>(resetPasswordSchema), resetPassword)
authRoutes.get('/me', auth, getAuth)
