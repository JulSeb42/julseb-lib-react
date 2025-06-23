import { BiStar } from "react-icons/bi"
import { Badge, designTokens, Flexbox } from "../../../"
import type {} from "../../../types"
import type { ILibBadge } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const badgePreview: ComponentPreview<ILibBadge> = {
	name: "Badge",
	component: Badge,
	category: "components",
	import: "Badge", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibBadge", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLSpanElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: (
				<Flexbox gap="sm">
					{Object.keys(designTokens.libColorsShort).map(
						(color, i) => (
							<Badge backgroundColor={color as any} key={i} />
						),
					)}
				</Flexbox>
			),
		},
		{
			previewTitle: "With icon",
			props: { children: <BiStar size={32} />, className: "size-12" },
		},
		{
			previewTitle: "With short number",
			props: {
				children: 2,
				backgroundColor: "danger",
			},
		},
		{
			previewTitle: "With long number",
			props: {
				children: 300,
				className: "w-fit px-2",
				backgroundColor: "success",
			},
		},
	],
	props: [
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: ["Any color from the library"],
			defaultValue: "primary",
			description: "Background color of the badge.",
			isRequired: false,
		},
		{
			name: "contentColor",
			type: "string",
			possibleValues: ["Any color from the library"],
			defaultValue: "white",
			description: "Text color of the badge.",
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
			description: "Border radius of the badge.",
			isRequired: false,
		},
	],
}
