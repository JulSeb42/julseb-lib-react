import { useState } from "react"
import { BiLogoReact } from "react-icons/bi"
import { Select } from "../../../"
import type { ILibSelect } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const options = ["React", "Vue", "Angular", "Python", "Flask", "Node"]

const Preview: FC<Partial<ILibSelect>> = props => {
	const [value, setValue] = useState(options[0])

	return (
		<Select
			value={value}
			setValue={setValue}
			options={options}
			{...props}
		/>
	)
}

export const selectPreview: ComponentPreview<ILibSelect> = {
	name: "Select",
	component: Select,
	category: "components",
	import: "Select",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibSelect",
	additionalTypeImports: [],
	extends: ["HTMLButtonElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview tabIndex={1} /> },
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					validation={{ status: false, message: "Hello" }}
					tabIndex={2}
				/>
			),
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					validation={{ status: true, message: "Hello" }}
					tabIndex={3}
				/>
			),
		},
		{
			previewTitle: "Light background",
			demo: <Preview inputBackground="light" tabIndex={4} />,
		},
		{
			previewTitle: "Dark background",
			demo: <Preview inputBackground="dark" tabIndex={5} />,
		},
		{
			previewTitle: "Pill",
			demo: <Preview inputVariant="pill" tabIndex={6} />,
		},
		{
			previewTitle: "With icon",
			demo: <Preview icons={{ left: <BiLogoReact /> }} tabIndex={7} />,
		},
	],
	props: [
		{
			name: "value",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Currently selected value.",
			isRequired: true,
		},
		{
			name: "setValue",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to update the selected value.",
			isRequired: true,
		},
		{
			name: "options",
			type: "Array<string>",
			possibleValues: [],
			defaultValue: null,
			description: "Array of options to display in the dropdown.",
			isRequired: true,
		},
		{
			name: "listDirection",
			type: "string",
			possibleValues: ["up", "down"],
			defaultValue: "down",
			description: "Direction for the dropdown list to appear.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: "caret: BiCaretDown",
			description:
				"Icon configuration object with left icon and caret icon.",
			isRequired: false,
		},
		{
			name: "inputVariant",
			type: "string",
			possibleValues: ["rounded", "pill"],
			defaultValue: "rounded",
			description: "Visual variant of the select input.",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: null,
			description: "Background theme of the select input.",
			isRequired: false,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the select.",
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
			description: "Helper text to display at the bottom of the select.",
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
	],
}
