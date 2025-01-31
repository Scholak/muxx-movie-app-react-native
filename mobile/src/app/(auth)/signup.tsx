// Package Imports
import { View } from 'react-native'
import { useRouter } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

// Component Imports
import Card from '@/src/components/Atoms/Card'
import Input from '@/src/components/Atoms/Input'
import Typography from '@/src/components/Atoms/Typography'
import Checkbox from '@/src/components/Atoms/Checkbox'
import Button from '@/src/components/Atoms/Button'

const Signup = () => {
	const router = useRouter()

	return (
		<View className='flex-1 gap-6 px-5 py-10 bg-dark'>
			<Typography
				size='lg'
				weight='bold'
			>
				Selected plan
			</Typography>
			{/* Selected Subscription */}
			<Card className='mb-6 p-4 flex-row items-center justify-between'>
				<View className='flex-row gap-2'>
					<Typography
						size='3xl'
						weight='bold'
					>
						$8.99
					</Typography>
					<Typography
						weight='bold'
						color='gray'
					>
						/mo
					</Typography>
				</View>
				<FontAwesome6
					name='check'
					size={20}
					color='#ADEA00'
				/>
			</Card>

			{/* Personal Info */}
			<View className='gap-9'>
				<Typography
					weight='bold'
					size='lg'
				>
					Personal info
				</Typography>
				<Input
					onChange={() => {}}
					placeholder='Email'
				/>
				<Input
					onChange={() => {}}
					placeholder='Password'
					secureTextEntry
				/>
				<Input
					onChange={() => {}}
					placeholder='Password Again'
					secureTextEntry
				/>
			</View>

			{/* Terms & Conditions */}
			<View className='my-6 gap-4'>
				<Checkbox
					onChange={() => {}}
					label='Terms & Conditions'
				/>
				<Checkbox
					onChange={() => {}}
					label='Privacy policy'
					checked
				/>
			</View>

			{/* Submit Button */}
			<Button
				variant='primary'
				onPress={() => router.push('/signup-success')}
				text='Activate Account'
			/>
		</View>
	)
}

export default Signup
