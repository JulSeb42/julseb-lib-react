import { Link } from "react-router-dom"
import { Header, Text } from "../../../"
import type {} from "../../../types"
import type { ILibHeader } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const headerPreview: ComponentPreview<ILibHeader> = {
	name: "Header",
	component: Header,
	category: "components",
	import: "Header", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibHeader", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			demo: (
				<Text>
					<Link
						to="/header/demo"
						target="_blank"
						rel="noreferrer noopener"
					>
						Demo here
					</Link>
				</Text>
			),
		},
	],
	props: [
		{
			name: "logo",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: null,
			description: "Logo content to display in the header.",
			isRequired: true,
		},
		{
			name: "links",
			type: "Array of React Element",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of link elements for navigation. Required if you don't use `nav` or `children`.",
			isRequired: true,
		},
		{
			name: "nav",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: null,
			description:
				"Navigation content to display. Required if you don't use `links` or `children`",
			isRequired: true,
		},
		{
			name: "search",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description: "Search component to display in the header.",
			isRequired: false,
		},
		{
			name: "burgerPosition",
			type: "string",
			possibleValues: ["left", "right"],
			defaultValue: "right",
			description: "Position of the burger menu button.",
			isRequired: false,
		},
		{
			name: "burgerColor",
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
			defaultValue: "white",
			description:
				"Color for the burger menu button, can be a single color or object with open/closed states.",
			isRequired: false,
		},
		{
			name: "navDesktopPosition",
			type: "string",
			possibleValues: ["left", "right"],
			defaultValue: "right",
			description: "Position of the navigation on desktop screens.",
			isRequired: false,
		},
		{
			name: "navMobileVariant",
			type: "string",
			possibleValues: ["drawer", "fullscreen", "top"],
			defaultValue: "drawer",
			description: "Variant for mobile navigation display.",
			isRequired: false,
		},
		{
			name: "enableScrollingOpen",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether to allow page scrolling when mobile menu is open.",
			isRequired: false,
		},
		{
			name: "position",
			type: "string",
			possibleValues: ["relative", "absolute", "fixed"],
			defaultValue: "relative",
			description: "CSS position property for the header.",
			isRequired: false,
		},
		{
			name: "hideOnScroll",
			type: "number | boolean",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether to hide header on scroll, or scroll threshold in pixels.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "primary",
			description: "Background color for the header.",
			isRequired: false,
		},
		{
			name: "textColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "white",
			description: "Text color for header content.",
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
			defaultValue: "white",
			description: "Color for navigation links.",
			isRequired: false,
		},
	],
}
