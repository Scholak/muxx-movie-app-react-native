// Package Imports
import { useRouter } from 'expo-router'
import { Image, View } from 'react-native'

// Component Imports
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'

// Asset Imports
const check = require('@/src/assets/images/signup-success.png')

const ResetPasswordSuccess = () => {
	const router = useRouter()

	return (
		<View className='flex-1 justify-between px-5 py-10 bg-dark'>
			{/* Invisible View For Aligning Other Elements */}
			<View></View>

			<View className='items-center gap-6'>
				<Image source={check} />
				<Typography
					size='3xl'
					weight='bold'
					alignment='center'
				>
					Your password has been reseted successfully.
				</Typography>
			</View>
			<Button
				variant='primary'
				onPress={() => router.push('/signin')}
				text='Sign In'
			/>
		</View>
	)
}

export default ResetPasswordSuccess
