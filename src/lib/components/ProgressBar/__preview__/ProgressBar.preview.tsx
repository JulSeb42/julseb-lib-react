import { ProgressBar, getRandomNumber } from "../../../"
import type { ILibProgressBar } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const colors = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"gray",
	"white",
]

export const progressBarPreview: ComponentPreview<ILibProgressBar> = {
	name: "Progress Bar",
	component: ProgressBar,
	category: "components",
	import: "ProgressBar",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibProgressBar",
	additionalTypeImports: [],
	extends: ["HTMLMeterElement"],
	previews: (colors as any).map((color: string) => ({
		previewTitle: `Color ${color}`,
		props: { value: getRandomNumber(), color },
	})),
	props: [
		{
			name: "value",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Current progress value.",
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
			description: "Color theme for the progress bar fill.",
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
	],
}
