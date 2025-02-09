// Package Imports
import { useEffect } from 'react'
import { Redirect, useRootNavigationState, useRouter } from 'expo-router'

export default function Index() {
	const router = useRouter()
	const rootNavigationState = useRootNavigationState()

	useEffect(() => {
		if (rootNavigationState?.key) router.push('/onboarding')
	}, [router, rootNavigationState?.key])

	return <Redirect href='/home' />
}
