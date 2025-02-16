// Package Imports
import { Image, View } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

// Type Imports
import { ICast } from '@/src/types/stream-types'

type ICastItemProps = {
	cast: ICast
}

const CastItem = ({ cast }: ICastItemProps) => {
	return (
		<View className='w-24'>
			<Image
				source={cast.poster}
				className='w-24 h-24 mb-2 rounded-full'
			/>
			<Typography
				size='xs'
				weight='bold'
				alignment='center'
				capitalize
			>
				{cast.name}
			</Typography>
			<Typography
				size='xs'
				color='gray'
				alignment='center'
				capitalize
			>
				{cast.character}
			</Typography>
		</View>
	)
}

export default CastItem
