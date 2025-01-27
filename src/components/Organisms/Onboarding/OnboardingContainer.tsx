// Package Imports
import { useState } from 'react'
import { View } from 'react-native'

// Component Imports
import Logo from '@/src/components/Atoms/Logo'
import Button from '@/src/components/Atoms/Button'
import StepIndicator from '@/src/components/Molecules/Onboarding/StepIndicator'
import OnboardingScroller from '@/src/components/Molecules/Onboarding/OnboardingScroller'

const OnboardingContainer = () => {
	const [step, setStep] = useState<1 | 2 | 3 | 4>(1)

	return (
		<View className='p-6 flex-1 bg-dark'>
			<Logo className='mt-10 mr-auto' />
			<OnboardingScroller setStep={setStep} />
			<View className='mt-auto pt-16 gap-16'>
				<StepIndicator activeStep={step} />
				<View className='gap-4'>
					<Button
						variant='primary'
						size='lg'
						onPress={() => {}}
						text='Sign Up'
					/>
					<Button
						variant='secondary'
						size='lg'
						onPress={() => {}}
						text='Sign In'
					/>
				</View>
			</View>
		</View>
	)
}

export default OnboardingContainer
