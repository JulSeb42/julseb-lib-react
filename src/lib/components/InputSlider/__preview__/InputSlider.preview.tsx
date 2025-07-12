import { InputSlider } from "../../../"
import { Preview } from "./Preview"
import type { ILibInputSlider } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputSliderPreview: ComponentPreview<ILibInputSlider> = {
	name: "Input Slider",
	component: InputSlider,
	category: "components",
	import: "InputSlider",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibInputSlider",
	additionalTypeImports: [],
	extends: ["HTMLInputElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{
			previewTitle: "With min max & value",
			demo: <Preview showMinMax showValue="always" />,
		},
		{
			previewTitle: "Show value hover",
			demo: <Preview showValue="hover" />,
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					showValue="always"
					validation={{ status: false, message: "Message" }}
				/>
			),
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					showValue="always"
					validation={{ status: true, message: "Message" }}
				/>
			),
		},
	],
	props: [
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the slider.",
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
			description: "Helper text to display at the bottom of the slider.",
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
			name: "showMinMax",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether to display min and max values on the sides of the slider.",
			isRequired: false,
		},
		{
			name: "showValue",
			type: "string",
			possibleValues: ["never", "always", "hover"],
			defaultValue: "never",
			description: "When to show the current value tooltip.",
			isRequired: false,
		},
		{
			name: "min",
			type: "number",
			possibleValues: [],
			defaultValue: "0",
			description: "Minimum value for the slider range.",
			isRequired: false,
		},
		{
			name: "max",
			type: "number",
			possibleValues: [],
			defaultValue: "100",
			description: "Maximum value for the slider range.",
			isRequired: false,
		},
		{
			name: "value",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Current value of the slider.",
			isRequired: false,
		},
	],
}
