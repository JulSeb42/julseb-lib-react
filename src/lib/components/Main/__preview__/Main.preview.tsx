import { Link } from "react-router-dom"
import { Main, Text } from "../../../"

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
	import: "Main",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibMain",
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
