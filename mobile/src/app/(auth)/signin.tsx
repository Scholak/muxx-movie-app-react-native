// Package Imports
import { View } from 'react-native'
import { useRouter } from 'expo-router'

// Component Imports
import Input from '@/src/components/Atoms/Input'
import Button from '@/src/components/Atoms/Button'

const SignIn = () => {
	const router = useRouter()

	return (
		<View className='flex-1 gap-9 px-5 py-10 bg-dark'>
			<Input
				onChange={() => {}}
				placeholder='Email'
			/>
			<Input
				onChange={() => {}}
				placeholder='Password'
				secureTextEntry
			/>
			<Button
				variant='secondary'
				onPress={() => router.push('/reset-password')}
				text='Forgot password?'
			/>
			<Button
				variant='primary'
				onPress={() => {}}
				text='Sign In'
			/>
		</View>
	)
}

export default SignIn
