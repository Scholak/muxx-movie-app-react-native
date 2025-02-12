// Package Imports
import { Href, Link } from 'expo-router'
import { Pressable, useWindowDimensions, Image } from 'react-native'

// Type Imports
import { IRandomGenreStream } from '@/src/types/stream-type'

type IGenreSlideProps = {
	stream: IRandomGenreStream
}

const GenreSlide = ({ stream }: IGenreSlideProps) => {
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
