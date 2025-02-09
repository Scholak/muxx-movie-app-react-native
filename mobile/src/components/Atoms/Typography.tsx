// Package Imports
import { ReactNode } from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

type ITypographyProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
	weight?: 'regular' | 'bold' | 'medium'
	color?: 'white' | 'off-white' | 'gray' | 'green' | 'black'
	alignment?: 'left' | 'center' | 'right' | 'justify'
	capitalize?: boolean
	style?: StyleProp<TextStyle>
	className?: string
	children: ReactNode
}

// Size Styles
const sizes = {
	'5xl': 'text-5xl leading-none', // 56px
	'4xl': 'text-4xl', // 36px
	'3xl': 'text-3xl leading-10', // 32px
	'2xl': 'text-2xl', // 24px
	xl: 'text-xl', // 20px
	lg: 'text-lg', // 18px
	md: 'text-base', // 16px
	sm: 'text-sm', // 14px
	xs: 'text-xs', // 12px
}

// Weight Styles
const weights = {
	regular: 'font-inter-regular',
	medium: 'font-inter-medium',
	bold: 'font-inter-bold',
}

// Color Styles
const colors = {
	white: 'text-white',
	'off-white': 'text-off-white',
	gray: 'text-gray',
	green: 'text-[#ADEA00]',
	black: 'text-black',
}

// Alignment Styles
const alignments = {
	left: 'text-left',
	center: 'text-center',
	right: 'text-right',
	justify: 'text-justify',
}

const Typography = ({
	size = 'md',
	weight = 'regular',
	color = 'white',
	alignment = 'left',
	capitalize,
	style,
	className,
	children,
}: ITypographyProps) => {
	return (
		<View>
			<Text
				className={cn(
					sizes[size],
					weights[weight],
					colors[color],
					alignments[alignment],
					capitalize && 'capitalize',
					className,
				)}
				style={style}
			>
				{children}
			</Text>
		</View>
	)
}

export default Typography
