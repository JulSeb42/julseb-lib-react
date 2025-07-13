import { BiUser } from "react-icons/bi"
import { InputImage } from "../../../"
import type { ILibInputImage } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { Preview } from "./Preview"

export const inputImagePreview: ComponentPreview<ILibInputImage> = {
	name: "Input Image",
	component: InputImage,
	category: "components",
	import: "InputImage",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibInputImage",
	additionalTypeImports: null,
	extends: ["HTMLInputElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<Preview
					id="1"
					className="w-full h-[15vw]"
					icons={{ empty: <BiUser size={80} /> }}
					borderRadius="2xl"
					label="Avatar"
				/>
			),
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					id="2"
					validation={{ status: false, message: "hello" }}
				/>
			),
		},
		{ previewTitle: "Disabled", demo: <Preview id="3" disabled /> },
	],
	props: [
		{
			name: "id",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Unique identifier for the input element.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Label text to display above the input.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display at the bottom of the input.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
		{
			name: "value",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Current image URL or base64 string value.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: null,
			defaultValue: "hover: BiEdit, empty: BiImage",
			description:
				"Icon configuration object for upload and edit states.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: "md",
			description: "Border radius of the image container.",
			isRequired: false,
		},
		{
			name: "disabled",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Whether the input is disabled.",
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
