import { Meta } from "../../../"
import type {} from "../../../types"
import type { ILibMeta } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const metaPreview: ComponentPreview<ILibMeta> = {
	name: "Meta",
	component: Meta,
	category: "components",
	import: "Meta", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibMeta", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { title: "Hello World" } },
		// { previewTitle: "Default", demo: <Meta /> },
	],
}
