// Package Imports
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Component Imports
import Header from '@/src/components/Organisms/Protected/Header'
import MainSlider from '@/src/components/Organisms/Protected/MainSlider'
import CategoriesMenu from '@/src/components/Organisms/Protected/CategoriesMenu'

const Home = () => {
	return (
		<SafeAreaView className='px-4 flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<CategoriesMenu />
				<MainSlider />
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
