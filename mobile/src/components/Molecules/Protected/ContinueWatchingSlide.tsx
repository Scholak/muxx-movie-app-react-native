// Package Imports
import { Link } from 'expo-router'
import { Pressable, ImageBackground, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Utility Imports
import { generateStreamLink } from '@/src/utils/generate-stream-link'

// Type Imports
import { IContinueWatchingStream, IStreamType } from '@/src/types/stream-types'

type IContinueWatchingSlideProps = {
	stream: IContinueWatchingStream
	onRemove: (id: string, type: IStreamType) => void
}

const ContinueWatchingSlide = ({ stream, onRemove }: IContinueWatchingSlideProps) => {
	return (
		<Link
			href={generateStreamLink(stream.type, stream.id)}
			asChild
		>
			<Pressable className='relative w-36 gap-2'>
				<Pressable
					onPress={() => onRemove(stream.id, stream.type)}
					className='absolute -top-3 -right-3 w-8 h-8 items-center justify-center rounded-full bg-dark-gray z-10'
				>
					<AntDesign
						name='close'
						size={20}
						color='#ffffff'
					/>
				</Pressable>
				<ImageBackground
					source={stream.poster}
					resizeMode='cover'
					className='w-36 h-20 justify-between items-center p-2 rounded-2xl'
				>
					{/* Invisible view for alignment */}
					<View></View>
					<FontAwesome5
						name='play'
						size={20}
						color='#ffffff'
					/>
					<View className='w-full h-1 rounded bg-white'>
						<View className='w-1/4 h-1 rounded bg-primary'></View>
					</View>
				</ImageBackground>
				<Typography
					size='sm'
					weight='bold'
					capitalize
				>
					{stream.title}
				</Typography>
			</Pressable>
		</Link>
	)
}

export default ContinueWatchingSlide
