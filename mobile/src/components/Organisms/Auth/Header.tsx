// Package Imports
import { useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

const Header = (props: NativeStackHeaderProps) => {
	const router = useRouter()

	return (
		<SafeAreaView
			style={{ height: 88 }}
			className='h-full px-1.5 flex-row justify-between items-center bg-dark'
		>
			<TouchableOpacity
				onPress={() => {
					if (router.canGoBack()) {
						router.back()
					} else {
						router.replace('/onboarding')
					}
				}}
			>
				<Feather
					name='chevron-left'
					size={24}
					color='#D9D9D9'
				/>
			</TouchableOpacity>

			<Typography
				size='lg'
				weight='medium'
			>
				{props.options.title}
			</Typography>
			{/* Invisble Icon For Centering Title */}
			<Feather
				name='chevron-left'
				size={24}
				color='#0A0A0A'
			/>
		</SafeAreaView>
	)
}

export default Header
