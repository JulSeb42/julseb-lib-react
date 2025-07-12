import { useState, type ChangeEvent } from "react"
import { Input } from "../Input"
import { BiEnvelope } from "react-icons/bi"

export const PreviewFull = () => {
	const [value, setValue] = useState("hello")

	return (
		<Input
			label="Label"
			labelComment="- label comment"
			helper="Helper"
			helperBottom="Helper bottom"
			counter
			maxLength={100}
			prefix="Prefix"
			suffix="Suffix"
			placeholder="Placeholder"
			icon={<BiEnvelope />}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export const PreviewColor = () => {
	const [value, setValue] = useState("#000000")

	return (
		<Input
			type="color"
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export const PreviewWithValidation = () => {
	const [value, setValue] = useState("")
	const [validation, setValidation] = useState(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		setValue(value)

		if (value.length < 3) setValidation(false)
		else setValidation(true)
	}

	return (
		<Input
			value={value}
			onChange={handleChange}
			validation={{ status: validation, message: "Message" }}
		/>
	)
}

export const PreviewSearch = ({
	focusKeys,
	showKeys,
}: {
	focusKeys?: Array<string>
	showKeys?: boolean
}) => {
	const [value, setValue] = useState("")

	return (
		<Input
			type="search"
			focusKeys={focusKeys}
			showKeys={showKeys}
			value={value}
			onChange={e => setValue(e.target.value)}
			clearSearch={() => setValue("")}
		/>
	)
}
