import { Tooltip, Text } from "../../../"
import type { ILibTooltip } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<ILibTooltip> = {
	name: "Tooltip",
	component: Tooltip,
	category: "components",
	import: "Tooltip",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibTooltip",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Click",
			props: {
				tooltip: "Hello World!",
				trigger: "click",
				children: <Text>Hello, trigger on click</Text>,
			},
		},
		{
			previewTitle: "Hover",
			props: {
				tooltip: "Hello World!",
				trigger: "hover",
				hideArrow: true,
				position: "bottom",
				children: "Hello, trigger on hover without arrow",
			},
		},
		{
			previewTitle: "Left",
			props: {
				tooltip: "Hello World!",
				position: "left",
				children: "Hello tooltip left",
			},
		},
		{
			previewTitle: "Right",
			props: {
				tooltip: "Hello World!",
				position: "right",
				children: "Hello tooltip right",
			},
		},
	],
	props: [
		{
			name: "tooltip",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "The tooltip text or React element to display.",
			isRequired: true,
		},
		{
			name: "position",
			type: "string",
			possibleValues: ["top", "bottom", "left", "right"],
			defaultValue: "top",
			description: "Tooltip position.",
			isRequired: false,
		},
		{
			name: "hideArrow",
			type: "boolean",
			possibleValues: null,
			defaultValue: "false",
			description: "If true, hides the tooltip arrow.",
			isRequired: false,
		},
		{
			name: "trigger",
			type: "string",
			possibleValues: ["hover", "click"],
			defaultValue: "hover",
			description: "Tooltip trigger event.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "overlay-black-80",
			description: "Tooltip background color.",
			isRequired: false,
		},
		{
			name: "textColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "white",
			description: "Tooltip text color.",
			isRequired: false,
		},
		{
			name: "offset",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "xs",
			description: "Tooltip offset.",
			isRequired: false,
		},
		{
			name: "tooltipClasses",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional class names for the tooltip.",
			isRequired: false,
		},
	],
}
