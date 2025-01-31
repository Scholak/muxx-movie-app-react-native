// Package Imports
import { View, useWindowDimensions, ImageBackground, Image } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Asset Imports
const logo = require('@/src/assets/images/logo-big.png')
const bg = require('@/src/assets/images/bg-image.png')

const StepOne = () => {
	const { width } = useWindowDimensions()

	return (
		<ImageBackground
			source={bg}
			resizeMode='cover'
			style={{ width }}
		>
			<View className='pt-auto pb-72 px-6 flex-1 gap-6 bg-black/30'>
				<Image
					source={logo}
					className='w-40 h-10 mt-auto'
				/>
				<Typography
					size='3xl'
					weight='bold'
				>
					Unlimited viewing of movies, TV shows and more.
				</Typography>
			</View>
		</ImageBackground>
	)
}

export default StepOne
