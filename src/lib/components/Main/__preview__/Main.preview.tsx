import { Link } from "react-router-dom"
import { Main, Text } from "../../../"
import type {} from "../../../types"
import type { ILibMain } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const links: Array<{ text: string; url: string }> = [
	{ text: "Main default", url: "/main/demo-default" },
	{ text: "Main large", url: "/main/demo-large" },
	{ text: "Main form", url: "/main/demo-form" },
]

export const mainPreview: ComponentPreview<ILibMain> = {
	name: "Main",
	component: Main,
	category: "styles",
	import: "Main", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibMain", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
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
