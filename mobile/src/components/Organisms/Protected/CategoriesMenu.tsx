// Package Imports
import { View } from 'react-native'
import { Href, useRouter } from 'expo-router'

// Component Imports
import Button from '@/src/components/Atoms/Button'

type ICategory = {
	path: Href
	text: string
	isActive: boolean
}

const categories: ICategory[] = [
	{ path: '/home', text: 'All', isActive: true },
	{ path: '/tv-shows', text: 'TV Shows', isActive: false },
	{ path: '/movies', text: 'Movies', isActive: false },
]

const CategoriesMenu = () => {
	const router = useRouter()

	return (
		<View className='flex-row gap-2'>
			{categories.map(category => (
				<Button
					variant={category.isActive ? 'primary' : 'secondary'}
					onPress={() => router.push(category.path)}
					text={category.text}
					size='sm'
				/>
			))}
		</View>
	)
}

export default CategoriesMenu
