// Package Imports
import { View } from 'react-native'

// Component Imports
import Input from '@/src/components/Atoms/Input'
import Button from '@/src/components/Atoms/Button'

const SignIn = () => {
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
				onPress={() => {}}
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
