// Package Imports
import { useState } from 'react'
import { useWindowDimensions, View } from 'react-native'

// Component Imports
import StepIndicator from '@/src/components/Atoms/StepIndicator'
import FullWidthSlider from '@/src/components/Atoms/FullWidthSlider'
import MainSlide from '@/src/components/Molecules/Protected/MainSlide'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'

const bg = require('@/src/assets/images/bg-image.png')

const movies: ISliderMovie[] = [
	{ id: '1', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '2', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '3', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '4', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '5', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
]

const MainSlider = () => {
	const { height } = useWindowDimensions()

	const [step, setStep] = useState<any>(1)

	return (
		<View
			style={{ height: (Math.floor(height) * 2) / 3 }}
			className='mt-4 items-center'
		>
			<FullWidthSlider<ISliderMovie>
				data={movies}
				keyExtractor={item => item.id}
				renderStep={({ item }) => (
					<MainSlide
						key={item.key}
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
