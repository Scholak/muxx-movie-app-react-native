// Package Imports
import { View, ActivityIndicator } from 'react-native'

// Utility Imports
import useAuthStore from '@/src/store/auth-store'

const Spinner = () => {
	const { isRequesting } = useAuthStore()

	return isRequesting ? (
		<View className='absolute inset-0 items-center justify-center bg-dark/50'>
			<ActivityIndicator
				animating
				color='#ADEA00'
				size='large'
			/>
		</View>
	) : (
		<></>
	)
}

export default Spinner
