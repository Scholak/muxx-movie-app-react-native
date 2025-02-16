// Package Imports
import { Href } from 'expo-router'

// Type Imports
import { IStreamType } from '@/src/types/stream-types'

export const generateStreamLink = (type: IStreamType, id: string): Href => {
	if (type === 'movie') return `/movies/${id}`
	else if (type === 'serie') return `/series/${id}`
	else return '/home'
}
