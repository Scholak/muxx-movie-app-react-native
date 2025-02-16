// Package Imports
import { useState } from 'react'
import { ScrollView } from 'react-native'

// Component Imports
import MovieDetailTabs from '@/src/components/Molecules/Protected/MovieDetailTabs'
import MovieContent from '@/src/components/Organisms/Protected/MovieContent'
import StreamDetailBanner from '@/src/components/Organisms/Protected/StreamDetailBanner'

// Data Imports
import { movieDetail } from '@/src/data/movie'

// Type Imports
import { IMovieDetailTab } from '@/src/types/detail-tabs'

const MovieDetail = () => {
	const [activeTab, setActiveTab] = useState<IMovieDetailTab>('about')

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			className='flex-1 bg-dark'
		>
			<StreamDetailBanner
				title={movieDetail.title}
				poster={movieDetail.poster}
				genres={movieDetail.genres}
			/>
			<MovieDetailTabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<MovieContent activeTab={activeTab} />
		</ScrollView>
	)
}

export default MovieDetail
