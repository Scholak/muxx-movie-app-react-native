// Package Imports
import { View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

// Component Imports
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'

const StreamDetailBannerButtons = () => {
	return (
		<View className='flex-row items-center justify-center'>
			<Button
				variant='secondary'
				onPress={() => {}}
				asChild
				className='rounded-none'
			>
				<View className='px-4 items-center gap-1'>
					<Entypo
						name='plus'
						size={24}
						color='white'
					/>
					<Typography
						size='xs'
						color='white'
						className='-translate-y-0.5'
					>
						Add To List
					</Typography>
				</View>
			</Button>
			<Button
				variant='secondary'
				onPress={() => {}}
				asChild
				className='rounded-none'
			>
				<View className='px-4 items-center gap-1'>
					<MaterialCommunityIcons
						name='share-outline'
						size={24}
						color='white'
					/>
					<Typography
						size='xs'
						color='white'
						className='-translate-y-0.5'
					>
						Share
					</Typography>
				</View>
			</Button>
			<Button
				variant='secondary'
				onPress={() => {}}
				asChild
				className='rounded-none'
			>
				<View className='px-4 items-center gap-1'>
					<Feather
						name='download'
						size={24}
						color='white'
					/>
					<Typography
						size='xs'
						color='white'
						className='-translate-y-0.5'
					>
						Download
					</Typography>
				</View>
			</Button>
			<Button
				variant='secondary'
				onPress={() => {}}
				asChild
				className='rounded-none'
			>
				<View className='px-4 items-center gap-1'>
					<FontAwesome5
						name='chromecast'
						size={24}
						color='white'
					/>
					<Typography
						size='xs'
						color='white'
						className='-translate-y-0.5'
					>
						Cast
					</Typography>
				</View>
			</Button>
		</View>
	)
}

export default StreamDetailBannerButtons
