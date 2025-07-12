import { BackToTop, generateNumbers, Text } from "../../../"
import type { ILibBackToTop } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const text =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ullamcorper risus. Sed porttitor dolor eget leo accumsan ultricies. Morbi feugiat libero a mi sollicitudin, et varius eros porttitor. Aliquam ac elementum erat, interdum cursus tortor. Maecenas faucibus mollis nisl. Integer vel justo leo. Donec ac magna vel est blandit tristique. Cras nec mauris dictum elit blandit pellentesque sed vel sem. Nam ullamcorper malesuada orci, ac cursus mi convallis at. Donec aliquet pharetra velit, non suscipit elit consectetur vitae. Praesent suscipit, mi a interdum maximus, tellus metus feugiat urna, sed semper felis enim sed magna. Donec vestibulum commodo sapien quis lobortis. Maecenas et venenatis elit. Sed sed porttitor ante. Curabitur eu orci tristique, tristique justo eu, tempus elit."

export const backToTopPreview: ComponentPreview<ILibBackToTop> = {
	name: "Back To Top",
	component: BackToTop,
	category: "components",
	import: "BackToTop", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibBackToTop", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLButtonElement"],
	previews: [
		{
			demo: (
				<>
					{generateNumbers(0, 10).map(i => (
						<Text key={i}>{text}</Text>
					))}

					<BackToTop showTooltip={{}} />
				</>
			),
		},
	],
	props: [
		{
			name: "icon",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: "BiUpArrowAlt",
			description: "Icon element to display inside the button.",
			isRequired: false,
		},
		{
			name: "color",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"white",
			],
			defaultValue: "primary",
			description: "Button color theme.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: "full",
			description: "Border radius of the button.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["plain", "ghost", "outline", "transparent"],
			defaultValue: "plain",
			description: "Button variant style.",
			isRequired: false,
		},
		{
			name: "tooltip",
			type: "string",
			possibleValues: [],
			defaultValue: "Back to top",
			description: "Tooltip text displayed on hover.",
			isRequired: false,
		},
		{
			name: "showTooltip",
			type: "boolean | Object",
			possibleValues: null,
			defaultValue: "true",
			description:
				"Whether to show tooltip or tooltip configuration object.",
			isRequired: false,
		},
		{
			name: "containerStyle",
			type: "CSSProperties",
			possibleValues: null,
			defaultValue: null,
			description: "Inline styles for the container.",
			isRequired: false,
		},
		{
			name: "containerClasses",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional CSS classes for the container.",
			isRequired: false,
		},
	],
}
