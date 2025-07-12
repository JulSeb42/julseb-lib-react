import { BiX } from "react-icons/bi"
import { Tag, Flexbox } from "../../../"
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
	import: "Tag",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibTag",
	additionalTypeImports: null,
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
	props: [
		{
			name: "color",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: null,
			description: "Background color for the tag.",
			isRequired: false,
		},
		{
			name: "contentColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: null,
			description: "Text color for the tag content.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"2xs",
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: null,
			description: "Border radius for the tag corners.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["plain", "light", "outline"],
			defaultValue: null,
			description: "Visual variant for the tag styling.",
			isRequired: false,
		},
	],
}
