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
import {
	movies,
	forYouMovies,
	nowOnMuxxMovie,
	mainSliderMovies,
	randomGenreMovies,
	continueWatchingMovies,
} from '@/src/data/movie'

// Utility Imports
import { generateRandomGenres } from '@/src/utils/generate-random-genres'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'
import { IContinueWatchingStream, IRandomGenreStream } from '@/src/types/stream-types'

const Movies = () => {
	const handleRemoveFromWatching = (id: string) => {
		// api call...
	}

	return (
		<SafeAreaView className='flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<CategoriesMenu />
				<MainSlider streams={mainSliderMovies} />
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
						streams={continueWatchingMovies}
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
						streams={forYouMovies}
						renderItem={({ item }) => (
							<ForYouSlide
								stream={item}
								onRemove={handleRemoveFromWatching}
							/>
						)}
					/>
					<NowOnMuxx stream={nowOnMuxxMovie} />
					{generateRandomGenres(6).map(genre => (
						<StreamSlider<IRandomGenreStream>
							key={genre}
							title={`${genre} Movies`}
							streams={randomGenreMovies}
							renderItem={({ item }) => <GenreSlide stream={item} />}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Movies
