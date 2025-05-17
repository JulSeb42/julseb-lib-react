import { Section, Text } from "../../../"
import type { ILibSection } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const sizes = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]

export const sectionPreview: ComponentPreview<ILibSection> = {
	name: "Section",
	component: Section,
	category: "layouts",
	import: "Section",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibSection",
	additionalTypeImports: null,
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
