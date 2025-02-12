import { ImageSourcePropType } from 'react-native'

export type IStreamType = 'movie' | 'serie'

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
