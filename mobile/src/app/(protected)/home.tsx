// Package Imports
import { ScrollView, Text, View } from 'react-native'

// Component Imports
import Header from '@/src/components/Organisms/Protected/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Typography from '@/src/components/Atoms/Typography'

const Home = () => {
	return (
		<SafeAreaView className='px-4 flex-1 bg-dark'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<Typography>Home</Typography>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
