import { Link } from "react-router-dom"
import { Footer, clsx, uuid } from "../../../"
import type { ReactChildren } from "../../../types"
import type { ILibFooter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const CLASSES = clsx("font-black")

const items: Array<ReactChildren> = [
	<a href="#" className={CLASSES} key={uuid()}>
		Link
	</a>,
	<Link to="#" className={CLASSES} key={uuid()}>
		Link
	</Link>,
	<button onClick={() => alert("Clicked!")} className={CLASSES} key={uuid()}>
		Button
	</button>,
	<button onClick={() => alert("Clicked!")} className={CLASSES} key={uuid()}>
		Button
	</button>,
]

export const footerPreview: ComponentPreview<ILibFooter> = {
	name: "Footer",
	component: Footer,
	category: "components",
	import: "Footer", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibFooter", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { items, logo: "Logo" } },
		{
			previewTitle: "Vertical",
			props: {
				items,
				direction: "vertical",
				logo: <img src="/images/logo-fajny-css.svg" width={100} />,
			},
		},
		{
			previewTitle: "Without separator",
			props: { items, hideSeparator: true, logo: "Logo" },
		},
		{
			previewTitle: "With other link separator",
			props: { items, linksSeparator: "dash", logo: "Logo" },
		},
		{
			previewTitle: "Without link separator",
			props: { items, hideLinksSeparator: true, logo: "Logo" },
		},
	],
	props: [
		{
			name: "items",
			type: "Array of React Element",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of footer link items to display. Required for horizontal layout with items, optional for vertical layout.",
			isRequired: false,
		},
		{
			name: "logo",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: null,
			description:
				"Logo element to display in the footer. Required for horizontal layout, optional for vertical layout.",
			isRequired: false,
		},
		{
			name: "linksColor",
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
			description: "Color for navigation links.",
			isRequired: false,
		},
		{
			name: "hideSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide the top border separator line.",
			isRequired: false,
		},
		{
			name: "hideLinksSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide separators between footer links.",
			isRequired: false,
		},
		{
			name: "linksSeparator",
			type: "string",
			possibleValues: ["dot", "dash"],
			defaultValue: "dot",
			description: "Type of separator to display between links.",
			isRequired: false,
		},
		{
			name: "linksSeparatorColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"white",
				"black",
			],
			defaultValue: "gray-500",
			description: "Color for the separator between links.",
			isRequired: false,
		},
		{
			name: "direction",
			type: "string",
			possibleValues: ["horizontal", "vertical"],
			defaultValue: "horizontal",
			description: "Layout direction for footer content.",
			isRequired: false,
		},
	],
}
