import { Highlight } from "../../../"
import type { ILibHighlight } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const highlightPreview: ComponentPreview<ILibHighlight> = {
	name: "Highlight",
	component: Highlight,
	category: "components",
	import: "Highlight",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibHighlight",
	additionalTypeImports: null,
	extends: ["ILibText"],
	previews: [
		{
			previewTitle: "Default",
			props: {
				highlightedText: "hello",
				children: "Hello world",
				className: "className",
			},
		},
		{
			previewTitle: "With different styles",
			props: {
				highlightedText: "hello",
				children: "Hello world",
				highlightClasses: ["text-danger-500"],
			},
		},
	],
	props: [
		{
			name: "highlightedText",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "The substring to highlight within the children.",
			isRequired: true,
		},
		{
			name: "highlightStyle",
			type: "CSSProperties",
			possibleValues: null,
			defaultValue: null,
			description: "Inline style to apply to the highlighted text.",
			isRequired: false,
		},
		{
			name: "highlightClasses",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description:
				"Additional class names to apply to the highlighted text.",
			isRequired: false,
		},
	],
}
