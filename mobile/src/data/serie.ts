import { ISliderSerie } from '../types/serie-types'
import {
	IContinueWatchingStream,
	IForYouSlideStream,
	IMainSliderStream,
	INowOnMuxxStream,
	IRandomGenreStream,
} from '../types/stream-types'

const bg = require('@/src/assets/images/bg-image.png')

export const mainSliderSeries: IMainSliderStream[] = [
	{ id: '1', poster: bg, text: 'Carnage With Silver Hair', type: 'serie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '2', poster: bg, text: 'Carnage With Silver Hair', type: 'serie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '3', poster: bg, text: 'Carnage With Silver Hair', type: 'serie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '4', poster: bg, text: 'Carnage With Silver Hair', type: 'serie', genres: ['Comedy', 'Crime', 'Drama'] },
	{ id: '5', poster: bg, text: 'Carnage With Silver Hair', type: 'serie', genres: ['Comedy', 'Crime', 'Drama'] },
]

export const continueWatchingSeries: IContinueWatchingStream[] = [
	{ id: '1', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '2', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '3', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '4', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '5', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '6', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '7', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '8', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '9', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '10', poster: bg, title: 'example Serie title', type: 'serie' },
]

export const forYouSeries: IForYouSlideStream[] = [
	{ id: '1', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '2', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '3', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '4', poster: bg, title: 'example Serie title', type: 'serie' },
	{ id: '5', poster: bg, title: 'example Serie title', type: 'serie' },
]

export const nowOnMuxxSerie: INowOnMuxxStream = {
	id: '1',
	poster: bg,
	title: 'example Serie title',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur!',
	type: 'serie',
}

export const randomGenreSeries: IRandomGenreStream[] = [
	{ id: '1', poster: bg, type: 'serie' },
	{ id: '2', poster: bg, type: 'serie' },
	{ id: '3', poster: bg, type: 'serie' },
	{ id: '4', poster: bg, type: 'serie' },
	{ id: '5', poster: bg, type: 'serie' },
	{ id: '6', poster: bg, type: 'serie' },
	{ id: '7', poster: bg, type: 'serie' },
	{ id: '8', poster: bg, type: 'serie' },
	{ id: '9', poster: bg, type: 'serie' },
	{ id: '10', poster: bg, type: 'serie' },
]

export const series: ISliderSerie[] = [
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
