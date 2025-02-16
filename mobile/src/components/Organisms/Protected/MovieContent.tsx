// Package Imports
import { View } from 'react-native'

// Component Imports
import MovieCast from '@/src/components/Molecules/Protected/MovieCast'
import MovieOverview from '@/src/components/Molecules/Protected/MovieOverview'
import RelatedStreams from '@/src/components/Molecules/Protected/RelatedStreams'

// Data Imports
import { movieDetail } from '@/src/data/movie'

// Type Imports
import { IMovieDetailTab } from '@/src/types/detail-tabs'

type IMovieContentProps = {
	activeTab: IMovieDetailTab
}

const MovieContent = ({ activeTab }: IMovieContentProps) => {
	return (
		<View className='py-8 px-4'>
			{activeTab === 'about' && <MovieOverview />}
			{activeTab === 'cast-crew' && <MovieCast />}
			{activeTab === 'related' && <RelatedStreams streams={movieDetail.relatedStreams} />}
		</View>
	)
}

export default MovieContent
