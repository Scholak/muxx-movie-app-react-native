// Package Imports
import { useState } from 'react'
import { View } from 'react-native'

// Component Imports
import SelectBox from '@/src/components/Atoms/SelectBox'
import SerieEpisodes from '@/src/components/Molecules/Protected/SerieEpisodes'

// Data Imports
import { serieDetail } from '@/src/data/serie'

// Type Imports
import { ISeason } from '@/src/types/serie-types'

const SerieEpisodeContent = () => {
	const [selectedSeason, setSelectedSeason] = useState<ISeason>(serieDetail.seasons[0])

	const generateSeasonOptions = () =>
		serieDetail.seasons.map(season => ({
			value: season.id,
			label: season.name,
		}))

	const getSelectedSeason = () => ({
		value: selectedSeason.id,
		label: selectedSeason.name,
	})

	const handleChangeSeason = (option: { value: string; label: string }) => {
		const season = serieDetail.seasons.find(season => season.id === option.value) as ISeason

		setSelectedSeason(season)
	}

	return (
		<View>
			<SelectBox
				options={generateSeasonOptions()}
				selected={getSelectedSeason()}
				onSelect={handleChangeSeason}
			/>
			<SerieEpisodes episodes={selectedSeason.episodes} />
		</View>
	)
}

export default SerieEpisodeContent
