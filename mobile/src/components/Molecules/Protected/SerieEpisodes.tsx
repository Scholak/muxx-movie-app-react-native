// Package Imports
import { ImageBackground, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Type Imports
import { IEpisode } from '@/src/types/serie-types'

type ISerieEpisodesProps = {
	episodes: IEpisode[]
}

const SerieEpisodes = ({ episodes }: ISerieEpisodesProps) => {
	return (
		<View className='min-h-48'>
			{episodes.map(episode => (
				<View
					key={episode.id}
					className='py-4 flex-row items-center justify-between gap-4 border-b border-gray'
				>
					<ImageBackground
						source={episode.poster}
						className='w-28 h-16 items-center justify-center rounded-2xl overflow-hidden'
					>
						<FontAwesome5
							name='play'
							size={20}
							color='#ffffff'
						/>
					</ImageBackground>
					<View className='w-3/5'>
						<Typography weight='bold'>{episode.name}</Typography>
						<Typography color='gray'>{episode.duration} m</Typography>
					</View>
					<Feather
						name='download'
						size={24}
						color='#9A9A9A'
						className='ml-auto'
					/>
				</View>
			))}
		</View>
	)
}

export default SerieEpisodes
