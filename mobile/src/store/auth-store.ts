// Package Imports
import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Utility Imports
import { api } from '@/src/lib/api'
import { endpoints } from '@/src/constants/endpoints'

// Type Imports
import {
	IUser,
	ISignUpData,
	ISignInSchema,
	IResetPasswordSchema,
	IForgotPasswordSchema,
	ISignInResponse,
	ISubscription,
	ISignUpResponse,
} from '@/src/types/auth-types'

type State = {
	subscription: ISubscription
	user: IUser | null
	isRequesting: boolean
}

type ICallbackFunctions = {
	onSuccess?: Function
	onError?: Function
}

type IFetchUserParams = ICallbackFunctions & {}
type ISignUpParams = ICallbackFunctions & { data: ISignUpData }
type ISignInParams = ICallbackFunctions & { data: ISignInSchema }
type IForgotPasswordParams = ICallbackFunctions & { data: IForgotPasswordSchema }
type IResetPasswordParams = ICallbackFunctions & { data: IResetPasswordSchema }

type Action = {
	setSubscription: (subscription: ISubscription) => void
	fetchUser: ({ onSuccess, onError }: IFetchUserParams) => Promise<void>
	signUp: ({ data, onSuccess, onError }: ISignUpParams) => Promise<void>
	signIn: ({ data, onSuccess, onError }: ISignInParams) => Promise<void>
	forgotPassword: ({ data, onSuccess, onError }: IForgotPasswordParams) => Promise<void>
	resetPassword: ({ data, onSuccess, onError }: IResetPasswordParams) => Promise<void>
}

const useAuthStore = create<State & Action>(set => ({
	subscription: 'MONTHLY',
	user: null,
	isRequesting: false,

	setSubscription: (subscription: ISubscription) => {
		set({ subscription })
	},

	fetchUser: async ({ onSuccess = () => {}, onError = () => {} }) => {
		set({ isRequesting: true })
		try {
			const response = await api.get(endpoints.auth.me)
			set({ user: response.data.user })
			onSuccess(response.data)
		} catch (error) {
			console.error('Fetch User Error:', error)
			onError(error)
		} finally {
			set({ isRequesting: false })
		}
	},

	signUp: async ({ data, onSuccess = () => {}, onError = () => {} }) => {
		set({ isRequesting: true })
		try {
			const response = await api.post<ISignUpResponse>(endpoints.auth.signUp, data)
			await AsyncStorage.setItem('jwt', response.data.token)
			set({ user: response.data.signedUpUser })
			onSuccess(response.data)
		} catch (error) {
			console.error('Sign Up Error:', error)
			onError(error)
		} finally {
			set({ isRequesting: false })
		}
	},

	signIn: async ({ data, onSuccess = () => {}, onError = () => {} }) => {
		set({ isRequesting: true })
		try {
			const response = await api.post<ISignInResponse>(endpoints.auth.signIn, data)
			await AsyncStorage.setItem('jwt', response.data.token)
			set({ user: response.data.signedInUser })
			onSuccess(response.data)
		} catch (error: any) {
			console.error('Sign In Error:', error.message)
			onError(error)
		} finally {
			set({ isRequesting: false })
		}
	},

	forgotPassword: async ({ data, onSuccess = () => {}, onError = () => {} }) => {
		set({ isRequesting: true })
		try {
			const response = await api.post(endpoints.auth.forgotPassword, data)
			onSuccess(response.data)
		} catch (error) {
			console.error('Forgot Password Error:', error)
			onError(error)
		} finally {
			set({ isRequesting: false })
		}
	},

	resetPassword: async ({ data, onSuccess = () => {}, onError = () => {} }) => {
		set({ isRequesting: true })
		try {
			const response = await api.post(endpoints.auth.resetPassword, data)
			set({ user: response.data.user })
			onSuccess(response.data)
		} catch (error) {
			console.error('Reset Password Error:', error)
			onError(error)
		} finally {
			set({ isRequesting: false })
		}
	},
}))

export default useAuthStore
