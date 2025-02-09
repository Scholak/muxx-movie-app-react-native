// Package Imports
import { Pressable, View } from 'react-native'
import { Href, Link, usePathname } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

type ILink = {
	path: Href
	icon: keyof typeof AntDesign.glyphMap
	text: string
}

const links: ILink[] = [
	{ path: '/home', icon: 'home', text: 'Home' },
	{ path: '/search', icon: 'search1', text: 'Search' },
	{ path: '/favorites', icon: 'hearto', text: 'Favorites' },
]

const BottomTabs = () => {
	const pathname = usePathname()

	return (
		<View className='w-full flex-row justify-evenly bg-[#1f1f1f]'>
			{links.map(link => (
				<Link
					key={link.text}
					href={link.path}
					asChild
				>
					<Pressable className='flex-1 py-2 items-center gap-0.5'>
						<AntDesign
							name={link.icon}
							size={20}
							color={pathname === link.path ? '#ADEA00' : '#ffffff'}
						/>
						<Typography
							size='xs'
							color={pathname === link.path ? 'green' : 'white'}
						>
							{link.text}
						</Typography>
					</Pressable>
				</Link>
			))}
		</View>
	)
}

export default BottomTabs
