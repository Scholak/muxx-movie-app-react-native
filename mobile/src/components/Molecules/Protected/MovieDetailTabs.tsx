// Package Imports
import { View } from 'react-native'

// Component Imports
import Button from '@/src/components/Atoms/Button'

// Type Imports
import { IMovieDetailTab } from '@/src/types/detail-tabs'

type IMovieDetailTabsProps = {
	activeTab: IMovieDetailTab
	setActiveTab: (activeTab: IMovieDetailTab) => void
}

const MovieDetailTabs = ({ activeTab, setActiveTab }: IMovieDetailTabsProps) => {
	return (
		<View className='flex-row justify-center gap-2'>
			<Button
				variant={activeTab === 'about' ? 'primary' : 'secondary'}
				onPress={() => setActiveTab('about')}
				text='About'
				size='sm'
			/>
			<Button
				variant={activeTab === 'cast-crew' ? 'primary' : 'secondary'}
				onPress={() => setActiveTab('cast-crew')}
				text='Cast & Crew'
				size='sm'
			/>
			<Button
				variant={activeTab === 'related' ? 'primary' : 'secondary'}
				onPress={() => setActiveTab('related')}
				text='More Like This'
				size='sm'
			/>
		</View>
	)
}

export default MovieDetailTabs
