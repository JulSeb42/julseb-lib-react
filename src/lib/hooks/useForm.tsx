import { useState, type ChangeEvent } from "react"

/**
 * Hook to manage form state with input handling, validation, and submission functionality.
 *
 * @hook
 *
 * @example
 * interface FormData {
 *   email: string
 *   password: string
 * }
 *
 * const { formData, handleInputs, resetForm, handleSubmit } = useForm<FormData>(
 *   { email: '', password: '' },
 *   (data) => console.log('Form submitted:', data)
 * )
 *
 * @template T - Type of the form data object
 * @param {T} [initialState={}] - Initial state of the form data
 * @param {function} [onSubmit] - Optional callback function called on form submission
 * @param {T} onSubmit.formData - The current form data when submitted
 *
 * @returns {object} Object containing form state and handlers
 * @returns {T} returns.formData - Current form data state
 * @returns {function} returns.handleInputs - Function to handle input changes
 * @returns {ChangeEvent<HTMLInputElement>} returns.handleInputs.e - Input change event
 * @returns {function} returns.resetForm - Function to reset form to initial state
 * @returns {function} returns.handleSubmit - Function to handle form submission
 * @returns {ChangeEvent<HTMLFormElement>} returns.handleSubmit.e - Form submit event
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useForm
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
