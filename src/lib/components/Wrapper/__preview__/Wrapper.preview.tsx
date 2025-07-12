import { Link } from "react-router-dom"
import { Wrapper, Text } from "../../../"
import type { ILibWrapper } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const wrapperPreview: ComponentPreview<ILibWrapper> = {
	name: "Wrapper",
	component: Wrapper,
	category: "styles",
	import: "Wrapper",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibWrapper",
	additionalTypeImports: null,
	extends: ["HTMLSectionElement"],
	previews: [
		{
			demo: (
				<div className="flex flex-col gap-2">
					<Text>
						<Link
							to="/main/demo-default"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo main default
						</Link>
					</Text>
					<Text>
						<Link
							to="/aside/demo-left"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo main and aside
						</Link>
					</Text>
				</div>
			),
		},
	],
	props: [
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: "lg",
			description: "Spacing between children elements.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "background",
			description: "Background color of the wrapper.",
			isRequired: false,
		},
		{
			name: "minHeight",
			type: "string",
			possibleValues: [
				"0",
				"full",
				"screen",
				"min",
				"max",
				"fit",
				"dvh",
				"lvh",
				"svh",
			],
			defaultValue: "svh",
			description: "Minimum height of the wrapper.",
			isRequired: false,
		},
	],
}
