// Package Imports
import { Link } from 'expo-router'
import { View, Image, Pressable } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

// Asset Imports
const logo = require('@/src/assets/images/logo.png')

const Header = () => {
	return (
		<View className='px-4 flex-row items-center justify-between py-6'>
			<Link
				href='/home'
				asChild
			>
				<Pressable>
					<Image
						source={logo}
						className='w-28 h-7'
					/>
				</Pressable>
			</Link>
			<Link
				href='/profile'
				asChild
			>
				<Pressable>
					<FontAwesome6
						name='face-smile'
						size={20}
						color='white'
					/>
				</Pressable>
			</Link>
		</View>
	)
}

export default Header
