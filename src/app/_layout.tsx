// Package Imports
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Slot, SplashScreen } from 'expo-router'

// Asset Imports
import '../global.css'

export default function RootLayout() {
	const [loaded, error] = useFonts({
		InterBold: require('../assets/fonts/Inter-Bold.ttf'),
		InterExtraBold: require('../assets/fonts/Inter-ExtraBold.ttf'),
		InterLight: require('../assets/fonts/Inter-Light.ttf'),
		InterMedium: require('../assets/fonts/Inter-Medium.ttf'),
		InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
		InterThin: require('../assets/fonts/Inter-Thin.ttf'),
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<>
			<StatusBar style='light' />
			<Slot />
		</>
	)
}
