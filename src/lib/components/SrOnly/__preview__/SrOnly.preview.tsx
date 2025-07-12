import { SrOnly } from "../../../"
import type {} from "../../../types"
import type { ILibSrOnly } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const srOnlyPreview: ComponentPreview<ILibSrOnly> = {
	name: "Sr Only",
	component: SrOnly,
	category: "helpers",
	import: "SrOnly", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibSrOnly", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [{ previewTitle: "Default", props: { children: "Hello World" } }],
	props: [],
}
