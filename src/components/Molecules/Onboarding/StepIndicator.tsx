// Package Imports
import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const Step = () => {
	return <View className='w-1 h-1 bg-[#787880] rounded-full'></View>
}

type IIndicatorProps = {
	activeStep: 1 | 2 | 3 | 4
}

const Indicator = ({ activeStep }: IIndicatorProps) => {
	const translateX = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		}
	})

	useEffect(() => {
		let isMounted = true

		if (isMounted) {
			translateX.value = withTiming((activeStep - 1) * 10, {
				duration: 200,
			})
		}

		return () => {
			isMounted = false
		}
	}, [activeStep, translateX])

	return (
		<Animated.View
			className={`absolute top-0 left-0 w-12 h-1 bg-primary rounded`}
			style={animatedStyle}
		></Animated.View>
	)
}

type IStepIndicatorProps = {
	activeStep: 1 | 2 | 3 | 4
}

const StepIndicator = ({ activeStep }: IStepIndicatorProps) => {
	return (
		<View className='items-center'>
			<View className='relative flex-row justify-center gap-2'>
				<Step />
				<Step />
				<Step />
				<View className='w-2' />
				<Step />
				<Step />
				<Step />
				<Indicator activeStep={activeStep} />
			</View>
		</View>
	)
}

export default StepIndicator
