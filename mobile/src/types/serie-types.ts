// Package Imports
import { ImageSourcePropType } from 'react-native'

// Type Imports
import { ICast, IRelatedStream } from '@/src/types/stream-types'

export type ISliderSerie = {
	id: string
	poster: ImageSourcePropType
}

export type IEpisode = {
	id: string
	name: string
	duration: number
	poster: ImageSourcePropType
}

export type ISeason = {
	id: string
	name: string
	episodes: IEpisode[]
}

export type ISerieDetail = {
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
	seasons: ISeason[]
}
