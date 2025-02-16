// Package Imports
import { Link } from 'expo-router'
import { Pressable, Image } from 'react-native'

// Utility Imports
import { generateStreamLink } from '@/src/utils/generate-stream-link'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'

type IStreamSlideProps = {
	stream: ISliderMovie
	type: 'movie' | 'serie'
}

const StreamSlide = ({ stream, type }: IStreamSlideProps) => {
	return (
		<Link
			href={generateStreamLink(type, stream.id)}
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
