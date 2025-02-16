// Package Imports
import { Link } from 'expo-router'
import { Pressable, ImageBackground, View, useWindowDimensions } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Utility Imports
import { generateStreamLink } from '@/src/utils/generate-stream-link'

// Type Imports
import { IForYouSlideStream, IStreamType } from '@/src/types/stream-types'

type IForYouSlideProps = {
	stream: IForYouSlideStream
	onRemove: (id: string, type: IStreamType) => void
}

const ForYouSlide = ({ stream, onRemove }: IForYouSlideProps) => {
	const { width } = useWindowDimensions()

	return (
		<Link
			href={generateStreamLink(stream.type, stream.id)}
			asChild
		>
			<Pressable style={{ width: Math.floor(width * 0.8) }}>
				<ImageBackground
					source={stream.poster}
					resizeMode='cover'
					className='relative w-full h-48 justify-center items-center p-2 rounded-2xl overflow-hidden'
				>
					<View className='absolute inset-0 bg-dark/30'></View>
					<Typography
						size='lg'
						weight='bold'
						capitalize
					>
						{stream.title}
					</Typography>
				</ImageBackground>
			</Pressable>
		</Link>
	)
}

export default ForYouSlide
