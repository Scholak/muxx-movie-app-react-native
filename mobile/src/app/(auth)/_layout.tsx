// Package Imports
import Header from '@/src/components/Organisms/Auth/Header'
import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<Stack screenOptions={{ header: props => <Header {...props} /> }}>
			<Stack.Screen
				name='signin'
				options={{ title: 'Sign In' }}
			/>
			<Stack.Screen
				name='subscription'
				options={{ title: 'Subscriptions' }}
			/>
			<Stack.Screen
				name='signup'
				options={{ title: 'Sign Up' }}
			/>
			<Stack.Screen
				name='signup-success'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='reset-password'
				options={{ title: 'Reset Password' }}
			/>
			<Stack.Screen
				name='reset-password-success'
				options={{ headerShown: false }}
			/>
		</Stack>
	)
}
