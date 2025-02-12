export const generateRandomGenres = (count: number): string[] => {
	const genres = [
		'Action',
		'Adventure',
		'Animation',
		'Comedy',
		'Crime',
		'Documentary',
		'Drama',
		'Family',
		'Fantasy',
		'Mystery',
		'Romance',
		'Science Fiction',
		'Thriller',
		'War',
	]

	if (count > genres.length) {
		throw new Error('Count exceeds the number of available genres')
	}

	const shuffled = genres.sort(() => 0.5 - Math.random())
	return shuffled.slice(0, count)
}
