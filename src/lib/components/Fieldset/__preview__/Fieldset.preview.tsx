import { Fieldset } from "../../../"
import { ChildrenCheck, ChildrenText, ChildrenCheckValidate } from "./Preview"
import type { ILibFieldset } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const fieldsetPreview: ComponentPreview<ILibFieldset> = {
	name: "Fieldset",
	component: Fieldset,
	category: "components",
	import: "Fieldset",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibFieldset",
	additionalTypeImports: [],
	extends: ["HTMLFieldSetElement"],
	previews: [
		{
			previewTitle: "With check inputs",
			props: {
				legend: "Favourite word?",
				children: <ChildrenCheck />,
			},
		},
		{
			previewTitle: "With text inputs",
			props: {
				legend: "User information",
				children: <ChildrenText />,
			},
		},
		{
			previewTitle: "With validation",
			props: {
				legend: "Favourite word?",
				children: <ChildrenCheckValidate />,
				validation: { status: false, message: "This is required." },
			},
		},
	],
	props: [
		{
			name: "legend",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Legend text to display as the fieldset title.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the fieldset.",
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
				"Helper text to display at the bottom of the fieldset.",
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
			name: "borderRadius",
			type: "string",
			possibleValues: ["xs", "sm", "md", "lg", "xl", "full"],
			defaultValue: "md",
			description: "Border radius size for the fieldset.",
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
