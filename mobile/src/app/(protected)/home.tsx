// Package Imports
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Component Imports
import GenreSlide from '@/src/components/Molecules/Protected/GenreSlide'
import StreamSlide from '@/src/components/Molecules/Protected/StreamSlide'
import ForYouSlide from '@/src/components/Molecules/Protected/ForYouSlide'
import ContinueWatchingSlide from '@/src/components/Molecules/Protected/ContinueWatchingSlide'
import Header from '@/src/components/Organisms/Protected/Header'
import NowOnMuxx from '@/src/components/Organisms/Protected/NowOnMuxx'
import MainSlider from '@/src/components/Organisms/Protected/MainSlider'
import StreamSlider from '@/src/components/Organisms/Protected/StreamSlider'
import CategoriesMenu from '@/src/components/Organisms/Protected/CategoriesMenu'

// Data Imports
import { movies } from '@/src/data/movie'
import { continueWatching, forYou, nowOnMuxx, randomGenreStreams } from '@/src/data/stream'

// Utility Imports
import { generateRandomGenres } from '@/src/utils/generate-random-genres'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'
import { IContinueWatchingStream, IRandomGenreStream, IStreamType } from '@/src/types/stream-type'

const Home = () => {
	const handleRemoveFromWatching = (id: string, type: IStreamType) => {
		// api call...
	}

	return (
		<SafeAreaView className=' flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<CategoriesMenu />
				<MainSlider />
				<View className='my-8 gap-8'>
					{/* Trending Movies */}
					<StreamSlider<ISliderMovie>
						title='Trending'
						streams={movies}
						renderItem={({ item }) => (
							<StreamSlide
								stream={item}
								type='movie'
							/>
						)}
					/>
					{/* Continue Watching */}
					<StreamSlider<IContinueWatchingStream>
						title='Continue watching'
						streams={continueWatching}
						renderItem={({ item }) => (
							<ContinueWatchingSlide
								stream={item}
								onRemove={handleRemoveFromWatching}
							/>
						)}
					/>
					{/* For You */}
					<StreamSlider<IContinueWatchingStream>
						title='For You'
						streams={forYou}
						renderItem={({ item }) => (
							<ForYouSlide
								stream={item}
								onRemove={handleRemoveFromWatching}
							/>
						)}
					/>
					<NowOnMuxx stream={nowOnMuxx} />
					{generateRandomGenres(6).map((genre, index) => (
						<StreamSlider<IRandomGenreStream>
							title={index % 2 === 0 ? `${genre} Movies` : `${genre} Series`}
							streams={randomGenreStreams}
							renderItem={({ item }) => <GenreSlide stream={item} />}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
