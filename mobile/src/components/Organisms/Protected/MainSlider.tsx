// Package Imports
import { useState } from 'react'
import { useWindowDimensions, View } from 'react-native'

// Component Imports
import StepIndicator from '@/src/components/Atoms/StepIndicator'
import FullWidthSlider from '@/src/components/Atoms/FullWidthSlider'
import MainSlide from '@/src/components/Molecules/Protected/MainSlide'

// Data Imports
import { mainSliderMovies } from '@/src/data/movie'

// Type Imports
import { IMainSliderMovie } from '@/src/types/movie-types'

const MainSlider = () => {
	const { height } = useWindowDimensions()

	const [step, setStep] = useState<any>(1)

	return (
		<View
			style={{ height: (Math.floor(height) * 2) / 3 }}
			className='mt-4 items-center'
		>
			<FullWidthSlider<IMainSliderMovie>
				data={mainSliderMovies}
				keyExtractor={item => item.id}
				renderStep={({ item }) => (
					<MainSlide
						key={item.id}
						movie={item}
					/>
				)}
				setStep={setStep}
			/>
			<StepIndicator
				totalSteps={5}
				activeStep={step}
				className='mt-4'
			/>
		</View>
	)
}

export default MainSlider
