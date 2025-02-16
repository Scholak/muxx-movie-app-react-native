// Package Imports
import { View } from 'react-native'

// Component Imports
import SerieOverview from '@/src/components/Molecules/Protected/SerieOverview'
import RelatedStreams from '@/src/components/Molecules/Protected/RelatedStreams'
import SerieEpisodes from '@/src/components/Organisms/Protected/SerieEpisodeContent'

// Data Imports
import { serieDetail } from '@/src/data/serie'

// Type Imports
import { ISerieDetailTab } from '@/src/types/detail-tabs'

type ISerieContentProps = {
	activeTab: ISerieDetailTab
}

const SerieContent = ({ activeTab }: ISerieContentProps) => {
	return (
		<View className='py-8 px-4'>
			{activeTab === 'episodes' && <SerieEpisodes />}
			{activeTab === 'about' && <SerieOverview />}
			{activeTab === 'related' && <RelatedStreams streams={serieDetail.relatedStreams} />}
		</View>
	)
}

export default SerieContent
