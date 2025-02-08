// Package Imports
import { useEffect } from 'react'
import { Slot } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProtectedLayout = () => {
	useEffect(() => {
		const getToken = async () => {
			const token = await AsyncStorage.getItem('jwt')
			console.log(token)
		}

		getToken()
	}, [])

	return <Slot />
}

export default ProtectedLayout
