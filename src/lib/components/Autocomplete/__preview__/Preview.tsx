import { useState } from "react"
import { Autocomplete } from "../Autocomplete"
import { frenchCities } from "../../../../data"
import type { ILibAutocomplete } from "../types"

export const Preview: FC<Partial<ILibAutocomplete>> = props => {
	const [value, setValue] = useState("")

	return (
		<Autocomplete
			{...props}
			value={value}
			setValue={setValue}
			listResults={frenchCities}
		/>
	)
}
