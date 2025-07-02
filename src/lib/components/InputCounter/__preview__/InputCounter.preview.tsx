import { InputCounter } from "../../../"
import { Preview } from "./Preview"
import type { ILibInputCounter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCounterPreview: ComponentPreview<ILibInputCounter> = {
	name: "Input Counter",
	component: InputCounter,
	category: "components",
	import: "InputCounter", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibInputCounter", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLInputElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{ previewTitle: "No input", demo: <Preview noInput /> },
	],
	props: [],
}
