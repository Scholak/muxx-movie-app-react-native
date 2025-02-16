// Type Imports
import {
	INowOnMuxxStream,
	IForYouSlideStream,
	IRandomGenreStream,
	IContinueWatchingStream,
} from '@/src/types/stream-types'

// Asset Imports
const bg = require('@/src/assets/images/bg-image.png')

export const continueWatching: IContinueWatchingStream[] = [
	{ id: '1', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '2', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '3', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '4', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '5', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '6', poster: bg, title: 'example serie title', type: 'serie' },
	{ id: '7', poster: bg, title: 'example serie title', type: 'serie' },
	{ id: '8', poster: bg, title: 'example serie title', type: 'serie' },
	{ id: '9', poster: bg, title: 'example serie title', type: 'serie' },
	{ id: '10', poster: bg, title: 'example serie title', type: 'serie' },
]

export const forYou: IForYouSlideStream[] = [
	{ id: '1', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '2', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '3', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '4', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '5', poster: bg, title: 'example movie title', type: 'movie' },
]

export const nowOnMuxx: INowOnMuxxStream = {
	id: '1',
	poster: bg,
	title: 'example movie title',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur!',
	type: 'movie',
}

export const randomGenreStreams: IRandomGenreStream[] = [
	{ id: '1', poster: bg, type: 'movie' },
	{ id: '2', poster: bg, type: 'movie' },
	{ id: '3', poster: bg, type: 'movie' },
	{ id: '4', poster: bg, type: 'movie' },
	{ id: '5', poster: bg, type: 'movie' },
	{ id: '6', poster: bg, type: 'serie' },
	{ id: '7', poster: bg, type: 'serie' },
	{ id: '8', poster: bg, type: 'serie' },
	{ id: '9', poster: bg, type: 'serie' },
	{ id: '10', poster: bg, type: 'serie' },
]
