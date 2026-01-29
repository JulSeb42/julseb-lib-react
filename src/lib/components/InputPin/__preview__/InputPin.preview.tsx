import { useState, type FC, type FormEvent } from "react"
import { InputPin } from "../../../"
import type { LibValueInputPin } from "../../../types"
import type { ILibInputPin } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const initialState = { 0: "", 1: "", 2: "", 3: "" }

const Preview: FC<Partial<ILibInputPin>> = props => {
	const [values, setValues] = useState<LibValueInputPin>(initialState as any)
	const [validation, setValidation] = useState<undefined | boolean>(undefined)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (Object.values(values).filter(v => v === "").length) {
			setValidation(false)
			return
		} else {
			setValidation(undefined)
			alert(`Pin: ${Object.values(values).join("")}`)
			setValues(initialState as any)
			return
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputPin
				{...props}
				values={values}
				setValues={setValues}
				validation={
					validation !== undefined
						? {
								status: validation,
								message: "All inputs are required.",
							}
						: undefined
				}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export const inputPinPreview: ComponentPreview<ILibInputPin> = {
	name: "Input Pin",
	component: InputPin,
	category: "components",
	import: "InputPin",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibInputPin",
	additionalTypeImports: ["LibValueInputPin"],
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<Preview
					label="Pin"
					// eslint-disable-next-line
					autoFocus
				/>
			),
		},
		{ previewTitle: "Hidden", demo: <Preview hideValues /> },
		{ previewTitle: "Disabled", demo: <Preview disabled /> },
		{
			previewTitle: "Background light",
			demo: <Preview inputBackground="light" />,
		},
		{
			previewTitle: "Background dark",
			demo: <Preview inputBackground="dark" />,
		},
	],
	props: [
		{
			name: "values",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Object containing the current values for each pin input field.",
			isRequired: true,
		},
		{
			name: "setValues",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to update the pin input values.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the pin inputs.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description:
				"Helper text to display at the bottom of the pin inputs.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
		{
			name: "placeholders",
			type: "Array<string>",
			possibleValues: [],
			defaultValue: null,
			description: "Array of placeholder texts for each pin input field.",
			isRequired: false,
		},
		{
			name: "hideValues",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide the input values (password mode).",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: "light",
			description: "Background theme of the input fields.",
			isRequired: false,
		},
		{
			name: "containerClassName",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional CSS classes for the container.",
			isRequired: false,
		},
	],
}
