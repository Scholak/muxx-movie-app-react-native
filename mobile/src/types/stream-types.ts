// Package Imports
import { ImageSourcePropType } from 'react-native'

export type IStreamType = 'movie' | 'serie'

export type ICast = {
	id: string
	name: string
	character: string
	poster: ImageSourcePropType
}

export type IRelatedStream = {
	id: string
	poster: ImageSourcePropType
	title: string
	type: 'movie' | 'serie'
}

export type IMainSliderStream = {
	id: string
	poster: ImageSourcePropType
	text: string
	type: IStreamType
	genres: string[]
}

export type IContinueWatchingStream = {
	id: string
	poster: ImageSourcePropType
	title: string
	type: 'movie' | 'serie'
}

export type IForYouSlideStream = {
	id: string
	poster: ImageSourcePropType
	title: string
	type: 'movie' | 'serie'
}

export type INowOnMuxxStream = {
	id: string
	poster: ImageSourcePropType
	title: string
	description: string
	type: 'movie' | 'serie'
}

export type IRandomGenreStream = {
	id: string
	poster: ImageSourcePropType
	type: 'movie' | 'serie'
}
