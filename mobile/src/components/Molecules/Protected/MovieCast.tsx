// Package Imports
import { View } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'
import Cast from '@/src/components/Molecules/Protected/Cast'

// Data Imports
import { movieDetail } from '@/src/data/movie'

const MovieCast = () => {
	return (
		<View>
			<Cast cast={movieDetail.cast} />
			<View className='mt-10 flex-row items-center gap-2'>
				<Typography
					weight='medium'
					color='gray'
				>
					Producers
				</Typography>
				<Typography weight='medium'>{movieDetail.producers.join(', ')}</Typography>
			</View>
			<View className='flex-row items-center gap-2'>
				<Typography
					weight='medium'
					color='gray'
				>
					Directors
				</Typography>
				<Typography weight='medium'>{movieDetail.directors.join(', ')}</Typography>
			</View>
		</View>
	)
}

export default MovieCast
