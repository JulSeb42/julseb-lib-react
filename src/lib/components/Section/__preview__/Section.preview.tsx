import { Section, Text } from "../../../"
import type { ILibSection } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const sizes = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]

export const sectionPreview: ComponentPreview<ILibSection> = {
	name: "Section",
	component: Section,
	category: "layouts",
	import: "Section", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibSection", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		...sizes.map((size, i) => (
			<Section key={i} gap={size as any}>
				<Text tag="h4">Section with {size} gap</Text>
				<Text>Section content</Text>
			</Section>
		)),
	],
}
