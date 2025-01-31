// Package Imports
import { View } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

// Component Imports
import Card from '@/src/components/Atoms/Card'
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'

const Subscription = () => {
	const router = useRouter()

	return (
		<View className='flex-1 gap-6 px-5 py-10 bg-dark'>
			{/* Monthly Subscription */}
			<Card className='p-4 gap-8'>
				{/* Pricing */}
				<View className='gap-1'>
					<View className='flex-row items-start gap-2'>
						<Typography
							size='5xl'
							weight='bold'
						>
							$8.99
						</Typography>
						<Typography
							size='2xl'
							weight='bold'
							color='gray'
						>
							/mo
						</Typography>
					</View>
					<Typography
						weight='bold'
						color='gray'
					>
						Cancel at any time.
					</Typography>
				</View>
				{/* Features */}
				<View className='gap-3'>
					<View className='flex-row items-center gap-2'>
						<AntDesign
							name='caretright'
							size={16}
							color='#ADEA00'
						/>
						<Typography weight='bold'>Unlimited ad-free Movies and TV Shows</Typography>
					</View>
					<View className='flex-row items-center gap-2'>
						<AntDesign
							name='caretright'
							size={16}
							color='#ADEA00'
						/>
						<Typography weight='bold'>Watch in 4K</Typography>
					</View>
					<View className='flex-row items-center gap-2'>
						<AntDesign
							name='caretright'
							size={16}
							color='#ADEA00'
						/>
						<Typography weight='bold'>Unlimited devices</Typography>
					</View>
				</View>
				<Button
					variant='primary'
					onPress={() => router.push('/signup')}
					text='Monthly'
				/>
			</Card>

			{/* Yearly Subscription */}
			<Card className='p-4 gap-8'>
				{/* Pricing */}
				<View className='gap-1'>
					<View className='flex-row items-start gap-2'>
						<Typography
							size='5xl'
							weight='bold'
						>
							$98.89
						</Typography>
						<Typography
							size='2xl'
							weight='bold'
							color='gray'
						>
							/y
						</Typography>
					</View>
					<Typography
						weight='bold'
						color='gray'
					>
						With 1 year subscription save 19%.
					</Typography>
				</View>
				<Button
					variant='primary'
					onPress={() => router.push('/signup')}
					text='Yearly'
				/>
			</Card>
		</View>
	)
}

export default Subscription
