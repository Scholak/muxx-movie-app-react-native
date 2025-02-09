// Package Imports
import { ScrollView } from 'react-native'

// Component Imports
import Header from '@/src/components/Organisms/Protected/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Typography from '@/src/components/Atoms/Typography'
import CategoriesMenu from '@/src/components/Organisms/Protected/CategoriesMenu'

const Home = () => {
	return (
		<SafeAreaView className='px-4 flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<CategoriesMenu />
				<Typography>Home</Typography>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
