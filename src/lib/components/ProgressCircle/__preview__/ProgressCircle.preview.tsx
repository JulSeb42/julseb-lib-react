import { BiCheck } from "react-icons/bi"
import { ProgressCircle, getRandomNumber } from "../../../"
import type {} from "../../../types"
import type { ILibProgressCircle } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressCirclePreview: ComponentPreview<ILibProgressCircle> = {
	name: "Progress Circle",
	component: ProgressCircle,
	category: "components",
	import: "ProgressCircle", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibProgressCircle", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: { value: getRandomNumber() },
		},
		{
			previewTitle: "With value",
			props: {
				value: getRandomNumber(),
				showValue: true,
				size: 48,
				strokeWidth: 4,
			},
		},
		{
			previewTitle: "With icon",
			props: { value: getRandomNumber(), icon: <BiCheck size={24} /> },
		},
		{
			previewTitle: "Without animation",
			props: { value: getRandomNumber(), noAnimation: true },
		},
	],
	props: [
		{
			name: "value",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Current progress value (0-100).",
			isRequired: true,
		},
		{
			name: "size",
			type: "number",
			possibleValues: [],
			defaultValue: "48",
			description: "Size of the progress circle in pixels.",
			isRequired: false,
		},
		{
			name: "strokeWidth",
			type: "number",
			possibleValues: [],
			defaultValue: "4",
			description: "Width of the progress stroke.",
			isRequired: false,
		},
		{
			name: "noAnimation",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to disable the progress animation.",
			isRequired: false,
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
			description: "Color theme for the progress circle stroke.",
			isRequired: false,
		},
		{
			name: "showValue",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether to display the percentage value in the center.",
			isRequired: false,
		},
		{
			name: "icon",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: null,
			description:
				"Custom icon to display in the center instead of value.",
			isRequired: false,
		},
	],
}
