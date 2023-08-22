/*=============================================== useForm ===============================================*/

import { useState } from "react"
import type { ChangeEvent } from "react"

export function useForm<T>(
    initialState = {} as T,
    onSubmit?: (formData: T) => void
) {
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
