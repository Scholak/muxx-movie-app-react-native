// Package Imports
import { View, FlatList } from 'react-native'

// Component Imports
import CastItem from '@/src/components/Atoms/CastItem'

// Type Imports
import { ICast } from '@/src/types/stream-types'

type ICastProps = {
	cast: ICast[]
}

const Cast = ({ cast }: ICastProps) => {
	return (
		<FlatList
			data={cast}
			renderItem={({ item }) => <CastItem cast={item} />}
			ItemSeparatorComponent={() => <View className='w-4' />}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	)
}

export default Cast
