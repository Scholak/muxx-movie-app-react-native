// Package Imports
import { Href, Link } from 'expo-router'
import { Pressable, Image } from 'react-native'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'

type IStreamSlideProps = {
	stream: ISliderMovie
	type: 'movie' | 'serie'
}

const StreamSlide = ({ stream, type }: IStreamSlideProps) => {
	const getStreamLink = (): Href => {
		if (type === 'movie') return `/movies/${stream.id}`
		else if (type === 'serie') return `/series/${stream.id}`
		else return '/home'
	}

	return (
		<Link
			href={getStreamLink()}
			asChild
		>
			<Pressable>
				<Image
					className='w-28 h-40 rounded-2xl'
					resizeMode='cover'
					source={stream.poster}
				/>
			</Pressable>
		</Link>
	)
}

export default StreamSlide
