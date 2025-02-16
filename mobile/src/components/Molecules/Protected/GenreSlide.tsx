// Package Imports
import { Link } from 'expo-router'
import { Pressable, useWindowDimensions, Image } from 'react-native'

// Utility Imports
import { generateStreamLink } from '@/src/utils/generate-stream-link'

// Type Imports
import { IRandomGenreStream } from '@/src/types/stream-types'

type IGenreSlideProps = {
	stream: IRandomGenreStream
}

const GenreSlide = ({ stream }: IGenreSlideProps) => {
	const { width } = useWindowDimensions()

	return (
		<Link
			href={generateStreamLink(stream.type, stream.id)}
			asChild
		>
			<Pressable style={{ width: Math.floor(width * 0.275) }}>
				<Image
					source={stream.poster}
					resizeMode='cover'
					className='relative w-full h-48 justify-center items-center p-2 rounded-2xl overflow-hidden'
				/>
			</Pressable>
		</Link>
	)
}

export default GenreSlide
