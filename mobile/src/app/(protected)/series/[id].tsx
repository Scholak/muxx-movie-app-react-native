// Package Imports
import { useState } from 'react'
import { ScrollView } from 'react-native'

// Component Imports
import SerieContent from '@/src/components/Organisms/Protected/SerieContent'
import SerieDetailTabs from '@/src/components/Molecules/Protected/SerieDetailTabs'
import StreamDetailBanner from '@/src/components/Organisms/Protected/StreamDetailBanner'

// Data Imports
import { serieDetail } from '@/src/data/serie'

// Type Imports
import { ISerieDetailTab } from '@/src/types/detail-tabs'

const MovieDetail = () => {
	const [activeTab, setActiveTab] = useState<ISerieDetailTab>('episodes')

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			className='flex-1 bg-dark'
		>
			<StreamDetailBanner
				title={serieDetail.title}
				poster={serieDetail.poster}
				genres={serieDetail.genres}
			/>
			<SerieDetailTabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<SerieContent activeTab={activeTab} />
		</ScrollView>
	)
}

export default MovieDetail
