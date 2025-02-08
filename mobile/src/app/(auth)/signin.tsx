// Package Imports
import { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Toast from 'react-native-toast-message'

// Component Imports
import Input from '@/src/components/Atoms/Input'
import Button from '@/src/components/Atoms/Button'

// Utility Imports
import { signInSchema } from '@/src/validations/auth-validations'
import useAuthStore from '@/src/store/auth-store'

// Type Imports
import { ISignInResponse, ISignInSchema } from '@/src/types/auth-types'

const SignIn = () => {
	const router = useRouter()

	const { signIn } = useAuthStore()

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ISignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const handleSignIn = async (data: ISignInSchema) => {
		Keyboard.dismiss()

		await signIn({
			data,
			onSuccess: (response: ISignInResponse) => {
				Toast.show({
					type: 'success',
					text1: response.message,
				})
				reset()
				router.push('/home')
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
							placeholder='Email'
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							error={errors?.email?.message}
						/>
					)}
					name='email'
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder='Password'
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							error={errors?.password?.message}
							secureTextEntry
						/>
					)}
					name='password'
				/>
				<Button
					variant='secondary'
					onPress={() => router.push('/forgot-password')}
					text='Forgot password?'
				/>
				<Button
					variant='primary'
					onPress={handleSubmit(handleSignIn)}
					text='Sign In'
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default SignIn
