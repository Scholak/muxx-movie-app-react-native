import { ISliderMovie } from '../types/movie-types'
import {
	IContinueWatchingStream,
	IForYouSlideStream,
	IMainSliderStream,
	INowOnMuxxStream,
	IRandomGenreStream,
} from '../types/stream-types'

const bg = require('@/src/assets/images/bg-image.png')

export const mainSliderMovies: IMainSliderStream[] = [
	{ id: '1', poster: bg, text: 'Carnage With Silver Hair', type: 'movie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '2', poster: bg, text: 'Carnage With Silver Hair', type: 'movie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '3', poster: bg, text: 'Carnage With Silver Hair', type: 'movie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '4', poster: bg, text: 'Carnage With Silver Hair', type: 'movie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '5', poster: bg, text: 'Carnage With Silver Hair', type: 'movie', genres: ['Comedy', 'Crime', 'Drama'] },
]

export const continueWatchingMovies: IContinueWatchingStream[] = [
	{ id: '1', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '2', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '3', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '4', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '5', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '6', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '7', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '8', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '9', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '10', poster: bg, title: 'example movie title', type: 'movie' },
]

export const forYouMovies: IForYouSlideStream[] = [
	{ id: '1', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '2', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '3', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '4', poster: bg, title: 'example movie title', type: 'movie' },
	{ id: '5', poster: bg, title: 'example movie title', type: 'movie' },
]

export const nowOnMuxxMovie: INowOnMuxxStream = {
	id: '1',
	poster: bg,
	title: 'example movie title',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur!',
	type: 'movie',
}

export const randomGenreMovies: IRandomGenreStream[] = [
	{ id: '1', poster: bg, type: 'movie' },
	{ id: '2', poster: bg, type: 'movie' },
	{ id: '3', poster: bg, type: 'movie' },
	{ id: '4', poster: bg, type: 'movie' },
	{ id: '5', poster: bg, type: 'movie' },
	{ id: '6', poster: bg, type: 'movie' },
	{ id: '7', poster: bg, type: 'movie' },
	{ id: '8', poster: bg, type: 'movie' },
	{ id: '9', poster: bg, type: 'movie' },
	{ id: '10', poster: bg, type: 'movie' },
]

export const movies: ISliderMovie[] = [
	{ id: '1', poster: bg },
	{ id: '2', poster: bg },
	{ id: '3', poster: bg },
	{ id: '4', poster: bg },
	{ id: '5', poster: bg },
	{ id: '6', poster: bg },
	{ id: '7', poster: bg },
	{ id: '8', poster: bg },
	{ id: '9', poster: bg },
	{ id: '10', poster: bg },
]
