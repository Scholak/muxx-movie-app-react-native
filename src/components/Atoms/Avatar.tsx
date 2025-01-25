// Package Imports
import { useState } from 'react'
import { View, Text, Image } from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

type IAvatarProps = {
	image: string
	fallbackText?: string
}

const Avatar = ({ image, fallbackText }: IAvatarProps) => {
	const [displayFallback, setDisplayFallback] = useState<boolean>(false)

	return (
		<View
			className={cn(
				'w-[100px] h-[100px] items-center justify-center rounded-full overflow-hidden',
				displayFallback && fallbackText && 'bg-off-white',
			)}
		>
			{displayFallback && fallbackText && <Text>{fallbackText}</Text>}
			{!displayFallback && (
				<Image
					source={{
						uri: image,
					}}
					className='w-full h-full'
					onError={() => setDisplayFallback(true)}
				/>
			)}
		</View>
	)
}

export default Avatar
