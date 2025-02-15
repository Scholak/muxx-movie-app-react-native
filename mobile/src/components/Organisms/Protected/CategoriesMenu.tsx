// Package Imports
import { View } from 'react-native'
import { Href, usePathname, useRouter } from 'expo-router'

// Component Imports
import Button from '@/src/components/Atoms/Button'

type ICategory = {
	path: Href
	text: string
}

const categories: ICategory[] = [
	{ path: '/home', text: 'All' },
	{ path: '/series', text: 'TV Shows' },
	{ path: '/movies', text: 'Movies' },
]

const CategoriesMenu = () => {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<View className='px-4 flex-row gap-2'>
			{categories.map(category => (
				<Button
					key={category.text}
					variant={category.path === pathname ? 'primary' : 'secondary'}
					onPress={() => router.push(category.path)}
					text={category.text}
					size='sm'
				/>
			))}
		</View>
	)
}

export default CategoriesMenu
