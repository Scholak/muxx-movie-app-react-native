// Package Imports
import { useState } from 'react'
import { useWindowDimensions, View } from 'react-native'

// Component Imports
import StepIndicator from '@/src/components/Atoms/StepIndicator'
import FullWidthSlider from '@/src/components/Atoms/FullWidthSlider'
import MainSlide from '@/src/components/Molecules/Protected/MainSlide'

// Type Imports
import { IMainSliderStream } from '@/src/types/stream-types'

type IMainSliderProps = {
	streams: IMainSliderStream[]
}

const MainSlider = ({ streams }: IMainSliderProps) => {
	const { height } = useWindowDimensions()

	const [step, setStep] = useState<any>(1)

	return (
		<View
			style={{ height: (Math.floor(height) * 2) / 3 }}
			className='px-4 mt-4 items-center'
		>
			<FullWidthSlider<IMainSliderStream>
				data={streams}
				keyExtractor={item => item.id}
				renderStep={({ item }) => (
					<MainSlide
						key={item.id}
						stream={item}
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
