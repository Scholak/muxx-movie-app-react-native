// Package Imports
import { Href, Link } from 'expo-router'
import { Pressable, ImageBackground, View, useWindowDimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Type Imports
import { IForYouSlideStream, IStreamType } from '@/src/types/stream-type'

type IForYouSlideProps = {
	stream: IForYouSlideStream
	onRemove: (id: string, type: IStreamType) => void
}

const ForYouSlide = ({ stream, onRemove }: IForYouSlideProps) => {
	const { width } = useWindowDimensions()
	const getStreamLink = (): Href => {
		if (stream.type === 'movie') return `/movies/${stream.id}`
		else if (stream.type === 'serie') return `/series/${stream.id}`
		else return '/home'
	}

	return (
		<Link
			href={getStreamLink()}
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
