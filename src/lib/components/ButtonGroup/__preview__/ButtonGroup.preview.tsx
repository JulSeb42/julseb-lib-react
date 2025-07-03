import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { ButtonGroup } from "../../../"
import type { LibButtonGroupButtonItem } from "../../../types"
import type { ILibButtonGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const buttons: Array<LibButtonGroupButtonItem> = [
	{ id: "1", content: <BiLeftArrowAlt /> },
	{ id: "2", content: "Button", disabled: true },
	{ id: "3", content: "Button", onClick: () => alert("Clicked") },
	{ id: "4", content: "Button" },
	{ id: "5", content: <BiRightArrowAlt /> },
]

export const buttonGroupPreview: ComponentPreview<ILibButtonGroup> = {
	name: "Button Group",
	component: ButtonGroup,
	category: "components",
	import: "ButtonGroup",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibButtonGroup",
	additionalTypeImports: ["LibButtonGroupButtonItem"],
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { buttons } },
		{ previewTitle: "Ghost", props: { buttons, variant: "ghost" } },
		{
			previewTitle: "Transparent",
			props: { buttons, variant: "transparent" },
		},
		{
			previewTitle: "Success",
			props: { buttons, color: "success" },
		},
		{ previewTitle: "Small", props: { buttons, size: "small" } },
		{
			previewTitle: "Border radius",
			props: { buttons, borderRadius: "full" },
		},
	],
	props: [
		{
			name: "buttons",
			type: "Array of objects",
			possibleValues: null,
			defaultValue: null,
			description: "Array of button items to render in the group.",
			isRequired: true,
		},
		{
			name: "color",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"white",
			],
			defaultValue: "primary",
			description: "Color theme for the button group.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["plain", "ghost", "outline", "transparent"],
			defaultValue: "plain",
			description: "Visual variant style of the button group.",
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
			description: "Border radius of the button group container.",
			isRequired: false,
		},
		{
			name: "size",
			type: "string",
			possibleValues: ["default", "small"],
			defaultValue: "default",
			description: "Size of the buttons in the group.",
			isRequired: false,
		},
	],
}
