import { BiX } from "react-icons/bi"
import { Tag, Flexbox } from "../../../"
import type {} from "../../../types"
import type { ILibTag } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Flex: FC<{ children?: Children }> = ({ children }) => {
	return (
		<Flexbox gap="sm" flexWrap="wrap">
			{children}
		</Flexbox>
	)
}

const colors = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"gray",
	"white",
]

export const tagPreview: ComponentPreview<ILibTag> = {
	name: "Tag",
	component: Tag,
	category: "components",
	import: "Tag", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibTag", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLSpanElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<Flex>
					{colors.map(color => (
						<Tag color={color as any} key={color}>
							Tag
						</Tag>
					))}
				</Flex>
			),
		},
		{
			previewTitle: "Outline",
			demo: (
				<Flex>
					{colors.map(color => (
						<Tag color={color as any} variant="outline" key={color}>
							Tag
						</Tag>
					))}
				</Flex>
			),
		},
		{
			previewTitle: "With different border radius",
			demo: (
				<Flex>
					{colors.map(color => (
						<Tag color={color as any} borderRadius="lg" key={color}>
							Tag
						</Tag>
					))}
				</Flex>
			),
		},
		{
			previewTitle: "With icon",
			props: {
				children: (
					<>
						<BiX />
						Tag
					</>
				),
			},
		},
	],
	props: [],
}
