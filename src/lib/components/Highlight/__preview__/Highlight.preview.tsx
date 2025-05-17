import { Highlight } from "../../../"
import type {} from "../../../types"
import type { ILibHighlight } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const highlightPreview: ComponentPreview<ILibHighlight> = {
	name: "Highlight",
	component: Highlight,
	category: "components",
	import: "Highlight", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibHighlight", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
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
				highlightClasses: ["text-red"],
				// highlightStyle: {
				// 	color: "red",
				// },
			},
		},
	],
}
