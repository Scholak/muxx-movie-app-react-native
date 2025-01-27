// Package Imports
import { useCallback } from 'react'
import { NativeSyntheticEvent, NativeScrollEvent, FlatList } from 'react-native'

// Component Imports
import StepOne from '@/src/components/Molecules/Onboarding/StepOne'
import StepTwo from '@/src/components/Molecules/Onboarding/StepTwo'
import StepThree from '@/src/components/Molecules/Onboarding/StepThree'
import StepFour from '@/src/components/Molecules/Onboarding/StepFour'

type IOnboardingScrollerProps = {
	setStep: (step: 1 | 2 | 3 | 4) => void
}

const OnboardingScroller = ({ setStep }: IOnboardingScrollerProps) => {
	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const slideSize = event.nativeEvent.layoutMeasurement.width
		const index = event.nativeEvent.contentOffset.x / slideSize
		const roundIndex = Math.round(index)
		setStep((roundIndex + 1) as 1 | 2 | 3 | 4)
	}, [])

	const renderStep = ({ item }: { item: number }) => {
		switch (item) {
			case 1:
				return <StepOne />
			case 2:
				return <StepTwo />
			case 3:
				return <StepThree />
			case 4:
			default:
				return <StepFour />
		}
	}

	return (
		<FlatList
			data={[1, 2, 3, 4]}
			onScroll={onScroll}
			keyExtractor={item => item.toString()}
			renderItem={renderStep}
			showsHorizontalScrollIndicator={false}
			pagingEnabled
			horizontal
			className='absolute inset-0'
		/>
	)
}

export default OnboardingScroller
