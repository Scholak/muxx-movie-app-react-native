// Library Imports
import {
	TextInput,
	StyleProp,
	TextStyle,
	Text,
	View,
	NativeSyntheticEvent,
	TextInputFocusEventData,
} from 'react-native'

// Utility Imports
import { cn } from '@/src/utils/cn'

type IInputTypes = {
	value?: string
	error?: string
	placeholder?: string
	secureTextEntry?: boolean
	style?: StyleProp<TextStyle>
	className?: string
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
	onChange: (text: string) => void
}

const Input = ({ value, error, placeholder, secureTextEntry, style, className, onChange, onBlur }: IInputTypes) => {
	return (
		<View className='w-full gap-1'>
			<TextInput
				secureTextEntry={secureTextEntry}
				style={style}
				cursorColor='#656565'
				placeholderTextColor='#656565'
				className={cn(
					'p-4 bg-dark-gray text-white rounded-2xl placeholder:font-inter-regular',
					!!error && 'border border-red-500',
					className,
				)}
				placeholder={placeholder}
				onBlur={onBlur}
				onChangeText={onChange}
				value={value}
			/>
			{!!error && <Text className='text-red-500 text-sm font-poppins-medium '>{error}</Text>}
		</View>
	)
}

export default Input
