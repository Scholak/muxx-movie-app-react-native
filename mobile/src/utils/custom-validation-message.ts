type IArgs = {
	min?: string
	length?: string
}

type IValidationType = 'required' | 'min' | 'email' | 'same' | 'length'

export const customValidationMessage = (field: string, validationType: IValidationType, args?: IArgs) => {
	if (validationType === 'required') return `${field} is required`
	else if (validationType === 'min') return `${field} must be at least ${args?.min} characters`
	else if (validationType === 'email') return `${field} must be a valid email`
	else if (validationType === 'same') return `${field} don\'t match`
	else if (validationType === 'length') return `${field} must be ${args?.length} length`

	return ''
}
