// Package Imports
import { useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, FlatList } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

// Utility Imports
import { cn } from '@/src/utils/cn'

type IOption = {
	value: string
	label: string
}

type IOptionProps = {
	option: IOption
	isSelected: boolean
	handleSelect: (option: IOption) => void
}

type ISelectBoxProps = {
	options: IOption[]
	selected: IOption
	onSelect: (option: IOption) => void
}

const Option = ({ option, isSelected, handleSelect }: IOptionProps) => {
	return (
		<TouchableOpacity
			key={option.value}
			onPress={() => handleSelect(option)}
			className={cn('p-4', isSelected && 'bg-gray rounded-2xl')}
		>
			<Text className={cn('text-off-white', isSelected && 'font-inter-bold')}>{option.label}</Text>
		</TouchableOpacity>
	)
}

const SelectBox = ({ options, selected, onSelect }: ISelectBoxProps) => {
	const [open, setOpen] = useState<boolean>(false)

	const handleSelect = (option: IOption) => {
		onSelect(option)
		setOpen(false)
	}

	return (
		<View className='relative w-full h-14 bg-dark-gray rounded-2xl'>
			<Pressable onPress={() => setOpen(!open)}>
				<View className='p-4 flex-row justify-between items-center'>
					<Text className='text-white'>{selected.label}</Text>
					<Feather
						name='chevron-down'
						size={24}
						color='#9A9A9A'
						className='-translate-y-0.5'
					/>
				</View>
			</Pressable>

			{open && (
				<FlatList
					data={options}
					renderItem={({ item }) => (
						<Option
							isSelected={item.value === selected.value}
							option={item}
							handleSelect={handleSelect}
						/>
					)}
					className='absolute top-16 left-0 right-0 max-h-48 gap-2 w-full bg-dark-gray rounded-2xl overflow-hidden'
				/>
			)}
		</View>
	)
}

export default SelectBox
