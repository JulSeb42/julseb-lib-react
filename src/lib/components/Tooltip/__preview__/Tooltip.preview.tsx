import { Tooltip, Text } from "../../../"
import type {} from "../../../types"
import type { ILibTooltip } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<ILibTooltip> = {
	name: "Tooltip",
	component: Tooltip,
	category: "components",
	import: "Tooltip", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibTooltip", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
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
				// offset: -8,
			},
		},
		{
			previewTitle: "Right",
			props: {
				tooltip: "Hello World!",
				position: "right",
				children: "Hello tooltip right",
				// offset: -20,
			},
		},
	],
}
