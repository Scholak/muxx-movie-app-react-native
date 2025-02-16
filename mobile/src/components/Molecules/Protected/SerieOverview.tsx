// Pacakge Imports
import { View } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'
import Cast from '@/src/components/Molecules/Protected/Cast'

// Data Imports
import { serieDetail } from '@/src/data/serie'

const SerieOverview = () => {
	return (
		<View className='gap-8'>
			<Typography weight='medium'>{serieDetail.description}</Typography>
			<Cast cast={serieDetail.cast} />
			<View className='gap-1'>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Rating
					</Typography>
					<Typography weight='medium'>{serieDetail.rating}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Languages
					</Typography>
					<Typography weight='medium'>{serieDetail.languages.join(', ')}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Year
					</Typography>
					<Typography weight='medium'>{serieDetail.releaseDate}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Runtime
					</Typography>
					<Typography weight='medium'>{serieDetail.duration}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Producers
					</Typography>
					<Typography weight='medium'>{serieDetail.producers.join(', ')}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Directors
					</Typography>
					<Typography weight='medium'>{serieDetail.directors.join(', ')}</Typography>
				</View>
			</View>
		</View>
	)
}

export default SerieOverview
