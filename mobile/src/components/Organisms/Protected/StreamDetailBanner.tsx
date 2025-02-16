// Package Imports
import { Link } from 'expo-router'
import { Fragment } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, ImageSourcePropType, useWindowDimensions, ImageBackground, Pressable, Image } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

// Component Imports
import Button from '@/src/components/Atoms/Button'
import Typography from '@/src/components/Atoms/Typography'
import StreamDetailBannerButtons from '@/src/components/Molecules/Protected/StreamDetailBannerButtons'

// Asset Imports
const logo = require('@/src/assets/images/logo.png')

type IStreamDetailBannerProps = {
	title: string
	poster: ImageSourcePropType
	genres: string[]
}

const StreamDetailBanner = ({ title, poster, genres }: IStreamDetailBannerProps) => {
	const { height } = useWindowDimensions()

	return (
		<ImageBackground
			style={{ height: Math.floor(height * 0.75) }}
			source={poster}
			className='relative'
		>
			<LinearGradient
				colors={['transparent', 'transparent', '#0A0A0A']}
				className='absolute inset-0'
			/>
			<View className='flex-1 gap-5 pt-16 pb-8 px-4 bg-dark/30'>
				<View className='mb-auto flex-row items-center justify-between'>
					<View className='w-5'></View>
					<Link
						href='/home'
						asChild
					>
						<Pressable>
							<Image
								source={logo}
								className='w-28 h-7'
							/>
						</Pressable>
					</Link>
					<Link
						href='/profile'
						asChild
					>
						<Pressable>
							<FontAwesome6
								name='face-smile'
								size={20}
								color='white'
							/>
						</Pressable>
					</Link>
				</View>
				<Typography
					size='4xl'
					weight='bold'
					alignment='center'
					capitalize
				>
					{title}
				</Typography>
				<View className='flex-row items-center justify-center gap-2'>
					{genres.map((genre: string, index: number) => (
						<Fragment key={genre}>
							<Typography
								size='sm'
								weight='medium'
							>
								{genre}
							</Typography>
							{index !== genres.length - 1 && (
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
					className='mx-auto'
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
				<StreamDetailBannerButtons />
			</View>
		</ImageBackground>
	)
}

export default StreamDetailBanner
