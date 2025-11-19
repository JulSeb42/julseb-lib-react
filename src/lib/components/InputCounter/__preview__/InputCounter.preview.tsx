import { InputCounter } from "../../../"
import { Preview } from "./Preview"
import type { ILibInputCounter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCounterPreview: ComponentPreview<ILibInputCounter> = {
	name: "Input Counter",
	component: InputCounter,
	category: "components",
	import: "InputCounter",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibInputCounter",
	additionalTypeImports: [],
	extends: ["HTMLInputElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<Preview
					showButtonsTooltip
					// labelButtons={{ minus: "Minus", plus: "Plus" }}
				/>
			),
		},
		{ previewTitle: "No input", demo: <Preview noInput /> },
	],
	props: [
		{
			name: "value",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Current counter value.",
			isRequired: true,
		},
		{
			name: "setValue",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description: "Function to update the counter value.",
			isRequired: true,
		},
		{
			name: "onClickPlus",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description:
				"Callback function triggered when plus button is clicked.",
			isRequired: false,
		},
		{
			name: "onClickMinus",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description:
				"Callback function triggered when minus button is clicked.",
			isRequired: false,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text for the counter input.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional comment text for the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text displayed above the counter.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text displayed below the counter.",
			isRequired: false,
		},
		{
			name: "inputVariant",
			type: "string",
			possibleValues: ["rounded", "pill", "square"],
			defaultValue: "rounded",
			description:
				"Visual variant for the input field. Only available when noInput is false.",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: null,
			description:
				"Background theme for the input field. Only available when noInput is false.",
			isRequired: false,
		},
		{
			name: "noInput",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether to hide the input field and show only buttons.",
			isRequired: false,
		},
		{
			name: "buttonVariant",
			type: "string",
			possibleValues: [
				"contained",
				"outlined",
				"text",
				"transparent",
				"plain",
			],
			defaultValue: "contained",
			description: "Visual variant for the increment/decrement buttons.",
			isRequired: false,
		},
		{
			name: "buttonsColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"black",
				"white",
			],
			defaultValue: "primary",
			description: "Color theme for the increment/decrement buttons.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: "plus: BiPlus, minus: BiMinus",
			description: "Custom icons for the increment/decrement buttons.",
			isRequired: false,
		},
		{
			name: "labelButtons",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Custom labels for the increment/decrement buttons.",
			isRequired: false,
		},
		{
			name: "showButtonsTooltip",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether to show tooltips on the increment/decrement buttons.",
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
