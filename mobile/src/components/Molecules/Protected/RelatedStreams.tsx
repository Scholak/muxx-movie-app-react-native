// Package Imports
import { Link } from 'expo-router'
import { Image, Pressable, View } from 'react-native'

// Utility Imports
import { generateStreamLink } from '@/src/utils/generate-stream-link'

// Type Imports
import { IRelatedStream } from '@/src/types/stream-types'

type IRelatedStreamsProps = {
	streams: IRelatedStream[]
}

const RelatedStreams = ({ streams }: IRelatedStreamsProps) => {
	return (
		<View className='w-full flex-row flex-wrap justify-center gap-3'>
			{streams.map(stream => (
				<Link
					key={stream.id}
					href={generateStreamLink(stream.type, stream.id)}
					asChild
					className='w-[30%] aspect-[2/3] rounded-2xl overflow-hidden'
				>
					<Pressable>
						<Image
							source={stream.poster}
							className='w-full h-full object-cover'
						/>
					</Pressable>
				</Link>
			))}
		</View>
	)
}

export default RelatedStreams
