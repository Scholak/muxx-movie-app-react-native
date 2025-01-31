// Package Imports
import { ReactNode } from 'react'
import { Pressable, GestureResponderEvent, Text, ViewStyle, StyleProp } from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

type IButtonProps = {
	variant: 'primary' | 'secondary'
	text?: string
	asChild?: boolean
	children?: ReactNode
	style?: StyleProp<ViewStyle>
	className?: string
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
	fullWidth?: boolean
	onPress: (event: GestureResponderEvent) => void
}

// Variant Styles
const variants = {
	primary: {
		box: 'bg-primary',
		text: '',
	},
	secondary: {
		box: '',
		text: 'text-white',
	},
}

// Size Styles
const sizes = {
	sm: {
		box: 'h-8 px-2 rounded-xl',
		text: '',
	},
	md: {
		box: 'h-12 px-4 rounded-2xl',
		text: 'text-lg',
	},
	lg: {
		box: 'h-16 px-8 rounded-2xl',
		text: 'text-lg',
	},
}

const Button = ({
	variant,
	asChild = false,
	text,
	children,
	style,
	className,
	size = 'md',
	disabled,
	fullWidth,
	onPress,
}: IButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			className={cn(
				'justify-center overflow-hidden',
				sizes[size].box,
				variants[variant].box,
				fullWidth && 'w-full',
				asChild && 'p-0 justify-start',
				className,
			)}
			style={style}
			disabled={disabled}
		>
			{asChild ? (
				children
			) : (
				<Text className={cn('text text-center font-bold', sizes[size].text, variants[variant].text)}>{text}</Text>
			)}
		</Pressable>
	)
}

export default Button
