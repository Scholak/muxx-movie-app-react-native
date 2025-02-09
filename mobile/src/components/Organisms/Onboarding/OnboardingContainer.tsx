// Package Imports
import { useState } from 'react'
import { View } from 'react-native'
import { useRouter } from 'expo-router'

// Component Imports
import Logo from '@/src/components/Atoms/Logo'
import Button from '@/src/components/Atoms/Button'
import StepIndicator from '@/src/components/Atoms/StepIndicator'
import FullWidthSlider from '@/src/components/Atoms/FullWidthSlider'
import StepOne from '@/src/components/Molecules/Onboarding/StepOne'
import StepTwo from '@/src/components/Molecules/Onboarding/StepTwo'
import StepThree from '@/src/components/Molecules/Onboarding/StepThree'
import StepFour from '@/src/components/Molecules/Onboarding/StepFour'

const OnboardingContainer = () => {
	const router = useRouter()

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

	const [step, setStep] = useState<1 | 2 | 3 | 4>(1)

	return (
		<View className='p-6 flex-1 bg-dark'>
			<Logo className='mt-10 mr-auto' />
			<FullWidthSlider<number>
				data={[1, 2, 3, 4]}
				keyExtractor={item => item.toString()}
				renderStep={renderStep}
				setStep={setStep}
				className='absolute inset-0'
			/>
			<View className='mt-auto pt-16 gap-16'>
				<StepIndicator
					totalSteps={4}
					activeStep={step}
				/>
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
