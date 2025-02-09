// Package Imports
import { View, FlatList, ListRenderItem } from 'react-native'

// Component Imports
import Typography from '@/src/components/Atoms/Typography'

type IStreamSliderProps<T> = {
	title: string
	streams: T[]
	renderItem: ListRenderItem<T>
}

const StreamSlider = <T,>({ title, streams, renderItem }: IStreamSliderProps<T>) => {
	return (
		<View className='gap-3'>
			<Typography
				weight='bold'
				size='2xl'
			>
				{title}
			</Typography>
			<FlatList
				data={streams}
				ItemSeparatorComponent={() => <View className='w-3' />}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				snapToAlignment='start'
				decelerationRate='normal'
				pagingEnabled
				horizontal
				className='overflow-visible'
			/>
		</View>
	)
}

export default StreamSlider
