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
	props: [
		{
			name: "size",
			type: "string",
			possibleValues: ["default", "small"],
			defaultValue: "default",
			description: "Size of the aside component.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: ["Any color from the library"],
			defaultValue: "white",
			description: "Background color of the aside component.",
			isRequired: false,
		},
	],
}
