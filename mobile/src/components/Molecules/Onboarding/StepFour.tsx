// Package Imports
import { Image, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Asset Imports
const illustration = require('@/src/assets/images/onboarding-step-four.png')

const StepFour = () => {
	const { width } = useWindowDimensions()

	return (
		<SafeAreaView
			className='pt-24 pb-72 px-6 flex-1 items-center gap-4'
			style={{ width }}
		>
			<Image
				source={illustration}
				className='w-72 h-72 mt-8 mb-4'
			/>
			<Typography
				size='3xl'
				weight='bold'
				alignment='center'
			>
				Share your access with a family members
			</Typography>
			<Typography
				weight='medium'
				alignment='center'
				color='gray'
			>
				VOD stands for video on demand, and refers to a distribution platform.
			</Typography>
		</SafeAreaView>
	)
}

export default StepFour
