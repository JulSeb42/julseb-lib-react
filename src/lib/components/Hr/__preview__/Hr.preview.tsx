import { Hr } from "../../../"
import type {} from "../../../types"
import type { ILibHr } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<ILibHr> = {
	name: "Hr",
	component: Hr,
	category: "components",
	import: "Hr", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibHr", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLHrElement"],
	previews: [
		{ previewTitle: "Default", props: {} },
		{
			previewTitle: "Rounded",
			props: { isRounded: true, className: "h-1" },
		},
	],
}
