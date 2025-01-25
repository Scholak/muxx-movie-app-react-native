import { Text, View } from 'react-native'

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='px-4 gap-3 bg-dark'
		>
			<Text className='text-red-500 text-4xl font-inter-regular'>Muxx Streaming App</Text>
		</View>
	)
}
