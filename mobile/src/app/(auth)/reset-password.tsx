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
import { resetPasswordSchema } from '@/src/validations/auth-validations'
import useAuthStore from '@/src/store/auth-store'

// Type Imports
import { IResetPasswordSchema } from '@/src/types/auth-types'

const ResetPassword = () => {
	const router = useRouter()

	const { resetPassword } = useAuthStore()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			code: '',
			password: '',
			passwordConfirmation: '',
		},
	})

	const handleResetPassword = (data: IResetPasswordSchema) => {
		Keyboard.dismiss()

		resetPassword({
			data,
			onSuccess: () => router.replace('/reset-password-success'),
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
							placeholder='Code'
							error={errors?.code?.message}
						/>
					)}
					name='code'
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							placeholder='New Password'
							error={errors?.password?.message}
							secureTextEntry
						/>
					)}
					name='password'
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							placeholder='New Password Again'
							error={errors?.passwordConfirmation?.message}
							secureTextEntry
						/>
					)}
					name='passwordConfirmation'
				/>
				<Button
					variant='primary'
					onPress={handleSubmit(handleResetPassword)}
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

export default ResetPassword
