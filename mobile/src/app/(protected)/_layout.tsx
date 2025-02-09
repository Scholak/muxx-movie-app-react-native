// Package Imports
import { useEffect } from 'react'
import { Tabs } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BottomTabs from '@/src/components/Organisms/Protected/BottomTabs'

const ProtectedLayout = () => {
	useEffect(() => {
		const getToken = async () => {
			const token = await AsyncStorage.getItem('jwt')
			console.log(token)
		}

		getToken()
	}, [])

	return (
		<Tabs
			tabBar={() => <BottomTabs />}
			screenOptions={{
				headerShown: false,
			}}
		></Tabs>
	)
}

export default ProtectedLayout
