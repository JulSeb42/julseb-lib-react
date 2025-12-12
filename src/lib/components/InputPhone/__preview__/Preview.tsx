import { useState, type ChangeEvent, type FormEvent } from "react"
import { InputPhone } from "../"
import { countries } from "../utils/countries"
import type { LibCountry } from "../../../types"
import type { ILibInputPhone } from "../types"

export const Preview = (
	props: Omit<
		ILibInputPhone,
		"value" | "onChange" | "selectedCountry" | "setSelectedCountry"
	>,
) => {
	const [value, setValue] = useState("")
	const [selectedCountry, setSelectedCountry] = useState<LibCountry>(
		countries[0],
	)
	const [showValue, setShowValue] = useState("")

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setShowValue(`${selectedCountry?.dial_code}${value}`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputPhone
				{...props}
				label="Phone"
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
			/>

			<button type="submit">Submit</button>

			<p>{showValue}</p>
		</form>
	)
}
