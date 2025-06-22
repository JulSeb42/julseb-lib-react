import { useState, type ChangeEvent } from "react"

/**
 * @description Hook to use in forms
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#useForm
 * @argument initialState = {} as T => type to define
 * @argument onSubmit?: (formData: T) => void
 */
export const useForm = <T,>(
	initialState = {} as T,
	onSubmit?: (formData: T) => void,
) => {
	const [formData, setFormData] = useState(initialState)

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.id]: e.target.value })

	const resetForm = () => setFormData(initialState)

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit?.(formData)
	}

	return { formData, handleInputs, resetForm, handleSubmit }
}
