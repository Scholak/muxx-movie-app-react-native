// Package Imports
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useRootNavigationState, useRouter } from 'expo-router'

export default function Index() {
	const router = useRouter()
	const rootNavigationState = useRootNavigationState()

	useEffect(() => {
		if (rootNavigationState?.key) router.push('/onboarding')
	}, [router, rootNavigationState?.key])

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='px-4 gap-3 bg-dark'
		>
			<Text className='text-red-500 text-4xl font-inter-regular'>Muxx Streaming App</Text>
		</View>
	)
}
