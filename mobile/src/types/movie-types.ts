import { ImageSourcePropType } from 'react-native'

export type IMainSliderMovie = {
	id: string
	poster: ImageSourcePropType
	text: string
	genres: string[]
}

export type ISliderMovie = {
	id: string
	poster: ImageSourcePropType
}
