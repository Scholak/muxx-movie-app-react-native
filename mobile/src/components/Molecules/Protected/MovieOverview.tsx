// Pacakge Imports
import { View } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Data Imports
import { movieDetail } from '@/src/data/movie'

const movieOverview = () => {
	return (
		<View className='gap-8'>
			<Typography weight='medium'>{movieDetail.description}</Typography>
			<View className='gap-1'>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Rating
					</Typography>
					<Typography weight='medium'>{movieDetail.rating}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Languages
					</Typography>
					<Typography weight='medium'>{movieDetail.languages.join(', ')}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Year
					</Typography>
					<Typography weight='medium'>{movieDetail.releaseDate}</Typography>
				</View>
				<View className='flex-row items-center gap-2'>
					<Typography
						weight='medium'
						color='gray'
					>
						Runtime
					</Typography>
					<Typography weight='medium'>{movieDetail.duration}</Typography>
				</View>
			</View>
		</View>
	)
}

export default movieOverview
