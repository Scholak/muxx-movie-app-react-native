// Package Imports
import { useEffect } from 'react'
import { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import Toast from 'react-native-toast-message'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

// Component Imports
import Card from '@/src/components/Atoms/Card'
import Input from '@/src/components/Atoms/Input'
import Typography from '@/src/components/Atoms/Typography'
import Checkbox from '@/src/components/Atoms/Checkbox'
import Button from '@/src/components/Atoms/Button'

// Utility Imports
import { signUpSchema } from '@/src/validations/auth-validations'
import useAuthStore from '@/src/store/auth-store'

// Type Imports
import { ISignUpSchema } from '@/src/types/auth-types'

const Signup = () => {
	const router = useRouter()

	const { subscription, signUp } = useAuthStore()

	const {
		control,
		setValue,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ISignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: '',
			password: '',
			passwordConfirmation: '',
			termsAndConditions: false,
			privacyPolicy: false,
		},
	})

	const handleSignUp = async (data: ISignUpSchema) => {
		Keyboard.dismiss()

		delete data.privacyPolicy
		delete data.termsAndConditions

		signUp({
			data: { ...data, subscription },
			onSuccess: () => {
				reset()
				router.replace('/signup-success')
			},
			onError: (error: AxiosError<any>) => {
				Toast.show({
					type: 'error',
					text1: error.response?.data.error,
				})
			},
		})
	}

	useEffect(() => {
		if (!subscription) router.push('/subscription')
	}, [subscription])

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View className='flex-1 gap-6 px-5 py-10 bg-dark'>
				<Typography
					size='lg'
					weight='bold'
				>
					Selected plan
				</Typography>
				{/* Selected Subscription */}
				<Card className='mb-6 p-4 flex-row items-center justify-between'>
					<View className='flex-row gap-2'>
						<Typography
							size='3xl'
							weight='bold'
						>
							{subscription === 'MONTHLY' ? '$8.99' : '$98.89'}
						</Typography>
						<Typography
							weight='bold'
							color='gray'
						>
							{subscription === 'MONTHLY' ? '/mo' : '/yr'}
						</Typography>
					</View>
					<FontAwesome6
						name='check'
						size={20}
						color='#ADEA00'
					/>
				</Card>

				{/* Personal Info */}
				<View className='gap-9'>
					<Typography
						weight='bold'
						size='lg'
					>
						Personal info
					</Typography>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								error={errors?.email?.message}
								placeholder='Email'
							/>
						)}
						name='email'
					/>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								error={errors?.password?.message}
								placeholder='Password'
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
								error={errors?.passwordConfirmation?.message}
								placeholder='Password Again'
								secureTextEntry
							/>
						)}
						name='passwordConfirmation'
					/>
				</View>

				{/* Terms & Conditions */}
				<View className='my-6 gap-4'>
					<View className='gap-1'>
						<Checkbox
							onChange={value => setValue('termsAndConditions', value)}
							checked={watch('termsAndConditions')}
							label='Terms & Conditions'
						/>
						{!!errors.termsAndConditions?.message && (
							<Text className='text-red-500 text-sm font-poppins-medium'>{errors.termsAndConditions?.message}</Text>
						)}
					</View>
					<View className='gap-1'>
						<Checkbox
							onChange={value => setValue('privacyPolicy', value)}
							checked={watch('privacyPolicy')}
							label='Privacy policy'
						/>
						{!!errors.privacyPolicy?.message && (
							<Text className='text-red-500 text-sm font-poppins-medium'>{errors.privacyPolicy?.message}</Text>
						)}
					</View>
				</View>

				{/* Submit Button */}
				<Button
					variant='primary'
					onPress={handleSubmit(handleSignUp)}
					text='Activate Account'
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Signup
