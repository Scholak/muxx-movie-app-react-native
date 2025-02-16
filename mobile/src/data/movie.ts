// Type Imports
import {
	INowOnMuxxStream,
	IMainSliderStream,
	IForYouSlideStream,
	IRandomGenreStream,
	IContinueWatchingStream,
} from '@/src/types/stream-types'
import { IMovieDetail, ISliderMovie } from '@/src/types/movie-types'

// Asset Imports
const bg = require('@/src/assets/images/bg-image.png')
const person = require('@/src/assets/images/person.png')

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

export const movieDetail: IMovieDetail = {
	id: '1',
	poster: bg,
	title: 'example movie title',
	description:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptates earum quasi temporibus doloribus tempora fugiat id minima! Rem minima beatae cum inventore voluptates dolor minus! Doloribus dolorem itaque dolore, maxime eos atque, a nostrum perferendis cum ducimus enim nam saepe ea animi, dolor unde repellendus quam in aspernatur provident.',
	releaseDate: '2025',
	duration: 214,
	genres: ['comedy', 'crime', 'drama'],
	rating: 8.5,
	cast: [
		{
			id: '1',
			name: 'person',
			character: 'character',
			poster: person,
		},
		{
			id: '2',
			name: 'person',
			character: 'character',
			poster: person,
		},
		{
			id: '3',
			name: 'person',
			character: 'character',
			poster: person,
		},
		{
			id: '4',
			name: 'person',
			character: 'character',
			poster: person,
		},
		{
			id: '5',
			name: 'person',
			character: 'character',
			poster: person,
		},
		{
			id: '6',
			name: 'person',
			character: 'character',
			poster: person,
		},
	],
	producers: ['Ruben Östlund'],
	directors: ['Ruben Östlund'],
	languages: ['English', 'Spanish'],
	relatedStreams: [
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
		{ id: '11', poster: bg, title: 'example movie title', type: 'movie' },
		{ id: '12', poster: bg, title: 'example movie title', type: 'movie' },
		{ id: '13', poster: bg, title: 'example movie title', type: 'movie' },
		{ id: '14', poster: bg, title: 'example movie title', type: 'movie' },
		{ id: '15', poster: bg, title: 'example movie title', type: 'movie' },
	],
}
