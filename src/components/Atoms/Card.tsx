// Package Imports
import { ReactNode } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

type ICardProps = {
	style?: StyleProp<ViewStyle>
	className?: string
	children: ReactNode
}

const Card = ({ style, className, children }: ICardProps) => {
	return <View className={cn('w-full p-4 rounded-2xl bg-dark-gray', className)}>{children}</View>
}

export default Card
