// Package Imports
import { ImageSourcePropType } from 'react-native'

// Type Imports
import { ICast, IRelatedStream } from '@/src/types/stream-types'

export type ISliderMovie = {
	id: string
	poster: ImageSourcePropType
}

export type IMovieDetail = {
	id: string
	poster: ImageSourcePropType
	title: string
	description: string
	releaseDate: string
	duration: number
	genres: string[]
	rating: number
	cast: ICast[]
	producers: string[]
	directors: string[]
	languages: string[]
	relatedStreams: IRelatedStream[]
}
