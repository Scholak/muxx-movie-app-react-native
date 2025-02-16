// Package Imports
import { View } from 'react-native'

// Component Imports
import Button from '@/src/components/Atoms/Button'

// Type Imports
import { ISerieDetailTab } from '@/src/types/detail-tabs'

type ISerieDetailTabsProps = {
	activeTab: ISerieDetailTab
	setActiveTab: (activeTab: ISerieDetailTab) => void
}

const SerieDetailTabs = ({ activeTab, setActiveTab }: ISerieDetailTabsProps) => {
	return (
		<View className='flex-row justify-center gap-2'>
			<Button
				variant={activeTab === 'episodes' ? 'primary' : 'secondary'}
				onPress={() => setActiveTab('episodes')}
				text='Episodes'
				size='sm'
			/>
			<Button
				variant={activeTab === 'about' ? 'primary' : 'secondary'}
				onPress={() => setActiveTab('about')}
				text='About'
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

export default SerieDetailTabs
