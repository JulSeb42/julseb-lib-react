import { Link } from "react-router-dom"
import { Aside, Text } from "../../../"
import type {} from "../../../types"
import type { ILibAside } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const links: Array<{ text: string; url: string }> = [
	{ text: "Aside left", url: "/aside/demo-left" },
	{ text: "Aside right", url: "/aside/demo-right" },
	{ text: "Aside both", url: "/aside/demo-both" },
]

export const asidePreview: ComponentPreview<ILibAside> = {
	name: "Aside",
	component: Aside,
	category: "styles",
	import: "Aside", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibAside", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<div className="flex flex-col gap-1">
					{links.map((link, i) => (
						<Text key={i}>
							<Link
								to={link.url}
								target="_blank"
								rel="noreferrer noopener"
							>
								{link.text}
							</Link>
						</Text>
					))}
				</div>
			),
		},
	],
}
