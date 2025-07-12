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
	props: [
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: null,
			description: "Spacing between children elements.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: null,
			description: "Background color of the main container.",
			isRequired: false,
		},
		{
			name: "size",
			type: "string",
			possibleValues: ["default", "large", "form"],
			defaultValue: "default",
			description: "Size of the main container.",
			isRequired: false,
		},
	],
}
