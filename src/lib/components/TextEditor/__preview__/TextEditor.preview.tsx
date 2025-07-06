import { TextEditor } from "../../../"
import { Preview } from "./Preview"
import type {} from "../../../types"
import type { ILibTextEditor } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const textEditorPreview: ComponentPreview<ILibTextEditor> = {
	name: "TextEditor",
	component: TextEditor,
	category: "components",
	import: "TextEditor", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibTextEditor", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [{ demo: <Preview /> }],
	props: [],
}
