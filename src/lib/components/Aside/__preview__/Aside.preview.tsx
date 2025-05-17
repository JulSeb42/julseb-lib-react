import { Link } from "react-router-dom"
import { Aside, Text } from "../../../"

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
	import: "Aside",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibAside",
	additionalTypeImports: null,
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
