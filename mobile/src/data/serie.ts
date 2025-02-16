// Type Imports
import {
	INowOnMuxxStream,
	IMainSliderStream,
	IForYouSlideStream,
	IRandomGenreStream,
	IContinueWatchingStream,
} from '@/src/types/stream-types'
import { ISerieDetail, ISliderSerie } from '@/src/types/serie-types'

// Asset Imports
const bg = require('@/src/assets/images/bg-image.png')
const person = require('@/src/assets/images/person.png')

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

export const serieDetail: ISerieDetail = {
	id: '1',
	poster: bg,
	title: 'example serie title',
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
	seasons: [
		{
			id: '1',
			name: 'Season One',
			episodes: [
				{
					id: '1',
					name: 'Episode One',
					duration: 45,
					poster: bg,
				},
				{ id: '2', name: 'Episode Two', duration: 45, poster: bg },
				{ id: '3', name: 'Episode Three', duration: 45, poster: bg },
				{ id: '4', name: 'Episode Four', duration: 45, poster: bg },
				{ id: '5', name: 'Episode Five', duration: 45, poster: bg },
			],
		},
		{
			id: '2',
			name: 'Season Two',
			episodes: [
				{ id: '1', name: 'Episode One', duration: 45, poster: bg },
				{ id: '2', name: 'Episode Two', duration: 45, poster: bg },
				{ id: '3', name: 'Episode Three', duration: 45, poster: bg },
			],
		},
		{
			id: '3',
			name: 'Season Three',
			episodes: [
				{ id: '1', name: 'Episode One', duration: 45, poster: bg },
				{ id: '2', name: 'Episode Two', duration: 45, poster: bg },
				{ id: '3', name: 'Episode Three', duration: 45, poster: bg },
				{ id: '4', name: 'Episode Four', duration: 45, poster: bg },
				{ id: '5', name: 'Episode Five', duration: 45, poster: bg },
				{ id: '6', name: 'Episode Six', duration: 45, poster: bg },
			],
		},
	],
	relatedStreams: [
		{ id: '1', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '2', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '3', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '4', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '5', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '6', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '7', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '8', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '9', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '10', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '11', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '12', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '13', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '14', poster: bg, title: 'example serie title', type: 'serie' },
		{ id: '15', poster: bg, title: 'example serie title', type: 'serie' },
	],
}
