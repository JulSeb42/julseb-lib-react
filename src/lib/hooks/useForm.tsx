import { useState, type ChangeEvent } from "react"

/**
 * useForm is a hook to manage form state, input changes, reset, and submission.
 *
 * @function
 * @template T
 * @param {T} [initialState={}] - Initial state of the form.
 * @param {(formData: T) => void} [onSubmit] - Optional submit handler called with form data.
 * @returns {{
 *   formData: T,
 *   handleInputs: (e: ChangeEvent<HTMLInputElement>) => void,
 *   resetForm: () => void,
 *   handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void
 * }} An object with form state and handlers.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useForm
 *
 * @example
 * const { formData, handleInputs, resetForm, handleSubmit } = useForm({ name: "" }, data => console.log(data))
 */
export const useForm = <T,>(
    initialState = {} as T,
    onSubmit?: (formData: T) => void
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
