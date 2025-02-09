// Package Imports
import { useCallback } from 'react'
import { NativeSyntheticEvent, NativeScrollEvent, FlatList, ListRenderItem } from 'react-native'

type IFullWidthSliderProps<T> = {
	data: T[]
	setStep: (step: 1 | 2 | 3 | 4) => void
	renderStep: ListRenderItem<any>
	keyExtractor: ((item: T, index: number) => string) | undefined
	className?: string
	[key: string]: any
}

const FullWidthSlider = <T,>({
	data,
	setStep,
	renderStep,
	keyExtractor,
	className,
	...rest
}: IFullWidthSliderProps<T>) => {
	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const slideSize = event.nativeEvent.layoutMeasurement.width
		const index = event.nativeEvent.contentOffset.x / slideSize
		const roundIndex = Math.round(index)
		setStep((roundIndex + 1) as 1 | 2 | 3 | 4)
	}, [])

	return (
		<FlatList
			data={data}
			onScroll={onScroll}
			keyExtractor={keyExtractor}
			renderItem={renderStep}
			showsHorizontalScrollIndicator={false}
			pagingEnabled
			horizontal
			className={className}
			{...rest}
		/>
	)
}

export default FullWidthSlider
