// Package Imports
import { useState } from 'react'
import { View } from 'react-native'
import { useRouter } from 'expo-router'

// Component Imports
import Logo from '@/src/components/Atoms/Logo'
import Button from '@/src/components/Atoms/Button'
import StepIndicator from '@/src/components/Molecules/Onboarding/StepIndicator'
import OnboardingScroller from '@/src/components/Molecules/Onboarding/OnboardingScroller'

const OnboardingContainer = () => {
	const router = useRouter()

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
						onPress={() => router.push('/subscription')}
						text='Sign Up'
					/>
					<Button
						variant='secondary'
						size='lg'
						onPress={() => router.push('/signin')}
						text='Sign In'
					/>
				</View>
			</View>
		</View>
	)
}

export default OnboardingContainer
