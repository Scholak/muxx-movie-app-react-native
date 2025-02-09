// Package Imports
import { Fragment } from 'react'
import { ImageBackground, View, useWindowDimensions } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'

// Type Imports
import { ISliderMovie } from '@/src/types/movie-types'

type IMainSlideProps = {
	movie: ISliderMovie
}

const MainSlide = ({ movie }: IMainSlideProps) => {
	const { width } = useWindowDimensions()

	return (
		<ImageBackground
			source={movie.poster}
			resizeMode='cover'
			style={{ width: Math.floor(width) - 40 }}
			className='flex-1 rounded-2xl mr-4 overflow-hidden'
		>
			<View className='p-4 flex-1 justify-end items-center gap-4 bg-dark/30'>
				<Typography
					size='3xl'
					weight='bold'
					alignment='center'
				>
					{movie.text}
				</Typography>
				<View className='flex-row items-center justify-center gap-2'>
					{movie.genres.map((genre: string, index: number) => (
						<Fragment key={genre}>
							<Typography
								size='sm'
								weight='medium'
							>
								{genre}
							</Typography>
							{index !== movie.genres.length - 1 && (
								<Typography
									color='off-white'
									weight='bold'
								>
									/
								</Typography>
							)}
						</Fragment>
					))}
				</View>
				<Button
					variant='primary'
					onPress={() => {}}
					asChild
				>
					<View className='h-full px-12 flex-row justify-center items-center gap-2'>
						<FontAwesome5
							name='play'
							size={20}
							color='black'
						/>
						<Typography
							size='lg'
							weight='bold'
							color='black'
							className='-translate-y-0.5'
						>
							Play
						</Typography>
					</View>
				</Button>
				<Button
					variant='secondary'
					onPress={() => {}}
					asChild
				>
					<View className='h-full px-12 flex-row justify-center items-center gap-2'>
						<Entypo
							name='plus'
							size={24}
							color='white'
						/>
						<Typography
							weight='bold'
							color='white'
							className='-translate-y-0.5'
						>
							Add To List
						</Typography>
					</View>
				</Button>
			</View>
		</ImageBackground>
	)
}

export default MainSlide
