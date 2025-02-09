// Package Imports
import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

// Utility Imports
import { cn } from '@/src/utils/cn'

const Step = () => {
	return <View className='w-1 h-1 bg-[#787880] rounded-full'></View>
}

type IIndicatorProps = {
	totalSteps: number
	activeStep: number
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
			className={`absolute top-0 left-0 w-11 h-1 bg-primary rounded`}
			style={animatedStyle}
		></Animated.View>
	)
}

type IStepIndicatorProps = {
	totalSteps: number
	activeStep: number
	className?: string
}

const StepIndicator = ({ totalSteps, activeStep, className }: IStepIndicatorProps) => {
	return (
		<View className={cn('items-center', className)}>
			<View className='relative flex-row justify-center gap-2'>
				{Array.from({ length: totalSteps + 3 }).map((value, index) => (
					<Step key={index} />
				))}
				<Indicator
					totalSteps={totalSteps}
					activeStep={activeStep}
				/>
			</View>
		</View>
	)
}

export default StepIndicator
