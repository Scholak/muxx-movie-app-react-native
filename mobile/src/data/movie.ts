import { IMainSliderMovie, ISliderMovie } from '../types/movie-types'

const bg = require('@/src/assets/images/bg-image.png')

export const mainSliderMovies: IMainSliderMovie[] = [
	{ id: '1', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '2', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '3', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '4', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '5', poster: bg, text: 'Carnage With Silver Hair', genres: ['Comedy', 'Crime', 'Drama'] },
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
