// Package Imports
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Component Imports
import ContinueWatchingSlide from '@/src/components/Molecules/Protected/ContinueWatchingSlide'
import StreamSlide from '@/src/components/Molecules/Protected/StreamSlide'
import ForYouSlide from '@/src/components/Molecules/Protected/ForYouSlide'
import Header from '@/src/components/Organisms/Protected/Header'
import MainSlider from '@/src/components/Organisms/Protected/MainSlider'
import CategoriesMenu from '@/src/components/Organisms/Protected/CategoriesMenu'
import StreamSlider from '@/src/components/Organisms/Protected/StreamSlider'

// Data Imports
import { movies } from '@/src/data/movie'
import { continueWatching, forYou } from '@/src/data/stream'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'
import { IContinueWatchingStream, IStreamType } from '@/src/types/stream-type'

const Home = () => {
	const handleRemoveFromWatching = (id: string, type: IStreamType) => {
		// api call...
	}

	return (
		<SafeAreaView className='px-4 flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<CategoriesMenu />
				<MainSlider />
				<View className='mt-8 gap-8'>
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
								type='movie'
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
								type='movie'
								onRemove={handleRemoveFromWatching}
							/>
						)}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
