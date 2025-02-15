// Package Imports
import { Href } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'

// Type Imports
import { INowOnMuxxStream } from '@/src/types/stream-types'

type INowOnMuxxProps = {
	stream: INowOnMuxxStream
}

const NowOnMuxx = ({ stream }: INowOnMuxxProps) => {
	const handlePlayMovie = (): Href => {
		if (stream.type === 'movie') return `/movies/${stream.id}`
		else if (stream.type === 'serie') return `/series/${stream.id}`
		else return '/home'
	}

	return (
		<View className='w-full mt-4'>
			<ImageBackground
				source={stream.poster}
				resizeMode='cover'
				className='relative w-full h-96 overflow-hidden'
			>
				<View className='absolute top-4 left-4 px-2 rounded-lg bg-primary z-10'>
					<Typography
						size='sm'
						weight='bold'
						color='black'
					>
						Now on MUXX
					</Typography>
				</View>
				<View className='w-full h-full py-2 px-4 justify-end items-start gap-4 bg-dark/30'>
					<Typography
						size='xl'
						weight='bold'
						capitalize
					>
						{stream.title}
					</Typography>
					<Typography>{stream.description}</Typography>
					<Button
						variant='secondary'
						onPress={handlePlayMovie}
						className='mt-2 rounded-none'
						asChild
					>
						<View className='h-full flex-row justify-center items-left gap-2'>
							<FontAwesome5
								name='play'
								size={20}
								color='white'
							/>
							<Typography
								size='lg'
								weight='bold'
								color='white'
								className='-translate-y-0.5'
							>
								Watch Now
							</Typography>
						</View>
					</Button>
				</View>
			</ImageBackground>
		</View>
	)
}

export default NowOnMuxx
