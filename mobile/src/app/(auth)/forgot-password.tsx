// Package Imports
import { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'

// Component Imports
import Input from '@/src/components/Atoms/Input'
import Button from '@/src/components/Atoms/Button'
import { zodResolver } from '@hookform/resolvers/zod'

// Utility Imports
import { forgotPasswordSchema } from '@/src/validations/auth-validations'
import useAuthStore from '@/src/store/auth-store'

// Type Imports
import { IForgotPasswordResponse, IForgotPasswordSchema } from '@/src/types/auth-types'

const ForgotPassword = () => {
	const router = useRouter()

	const { forgotPassword } = useAuthStore()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	})

	const handleForgotPassword = (data: IForgotPasswordSchema) => {
		Keyboard.dismiss()

		forgotPassword({
			data,
			onSuccess: (response: IForgotPasswordResponse) => {
				Toast.show({
					type: 'success',
					text1: response.message,
				})
				router.push('/reset-password')
			},
			onError: (error: AxiosError<any>) =>
				Toast.show({
					type: 'error',
					text1: error.response?.data.error,
				}),
		})
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View className='flex-1 gap-9 px-5 py-10 bg-dark'>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							placeholder='Email'
							error={errors?.email?.message}
						/>
					)}
					name='email'
				/>
				<Button
					variant='primary'
					onPress={handleSubmit(handleForgotPassword)}
					text='Reset Password'
				/>
				<Button
					variant='secondary'
					onPress={() => router.push('/signin')}
					text='Sign In'
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ForgotPassword
