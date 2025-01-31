// Asset Imports
import { Image, ImageStyle, StyleProp } from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

// Asset Imports
const logo = require('@/src/assets/images/logo.png')

type ILogoProps = {
	className?: string
	style?: StyleProp<ImageStyle>
}

const Logo = ({ className, style }: ILogoProps) => {
	return (
		<Image
			source={logo}
			className={cn('w-28 h-7', className)}
			style={style}
		/>
	)
}

export default Logo
