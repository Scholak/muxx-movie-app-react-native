// Package Imports
import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

// Utility Imports
import { cn } from '@/src/utils/cn'

type ICheckboxProps = {
	label?: string
	checked?: boolean
	onChange: (value: boolean) => void
}

// State Styles
const states = {
	checked: 'bg-primary',
	unchecked: 'border border-2 border-[#787880]',
}

const Checkbox = ({ checked, label, onChange }: ICheckboxProps) => {
	const [value, setValue] = useState<boolean>(!!checked)

	const handleChange = () => {
		const value = !checked

		setValue(value)
		onChange(value)
	}

	return (
		<Pressable onPress={handleChange}>
			<View className='flex-row items-center gap-3 border-2'>
				<View
					className={cn('w-6 h-6 items-center justify-center rounded-sm', value ? states.checked : states.unchecked)}
				>
					{value && (
						<FontAwesome6
							name='check'
							size={16}
							color='black'
						/>
					)}
				</View>
				{label && <Text className='text-white'>{label}</Text>}
			</View>
		</Pressable>
	)
}

export default Checkbox
