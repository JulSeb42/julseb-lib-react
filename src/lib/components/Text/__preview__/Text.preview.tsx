import { Text } from "../../../"
import type {} from "../../../types"
import type { ILibText } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { TextDisplay } from "./previews/TextDisplay"
import { TextTitles } from "./previews/TextTitles"
import { Paragraphs } from "./previews/Paragraphs"
import { Small } from "./previews/Small"
import { BlockQuote } from "./previews/Quote"
import { Unordered } from "./previews/Unordered"
import { Ordered } from "./previews/Ordered"
import { Description } from "./previews/Description"

export const textPreview: ComponentPreview<ILibText> = {
	name: "Text",
	component: Text,
	category: "styles",
	import: "Text", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibText", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Display", demo: <TextDisplay /> },
		{ previewTitle: "Titles", demo: <TextTitles /> },
		{ previewTitle: "Paragraphs", demo: <Paragraphs /> },
		{ previewTitle: "Small", demo: <Small /> },
		{ previewTitle: "Blockquote", demo: <BlockQuote /> },
		{ previewTitle: "Unordered list", demo: <Unordered /> },
		{ previewTitle: "Ordered list", demo: <Ordered /> },
		{ previewTitle: "Description list", demo: <Description /> },
	],
}
