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
			possibleValues: null,
			defaultValue: null,
			description: "Logo content to display in the header.",
			isRequired: true,
		},
		{
			name: "nav",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: null,
			description: "Navigation content to display.",
			isRequired: false,
		},
		{
			name: "links",
			type: "Array of React Element",
			possibleValues: null,
			defaultValue: null,
			description: "Array of link elements for navigation.",
			isRequired: false,
		},
		{
			name: "burgerPosition",
			type: "string | Object",
			possibleValues: ["left", "right"],
			defaultValue: '"right"',
			description: "Position of the burger menu button.",
			isRequired: false,
		},
		{
			name: "burgerColor",
			type: "string | Object",
			possibleValues: null,
			defaultValue: '"white"',
			description:
				"Color for the burger menu button, can be a single color or object with open/closed states.",
			isRequired: false,
		},
		{
			name: "navDesktopPosition",
			type: "string",
			possibleValues: ["left", "right"],
			defaultValue: '"right"',
			description: "Position of the navigation on desktop screens.",
			isRequired: false,
		},
		{
			name: "navMobileVariant",
			type: "string",
			possibleValues: ["drawer", "full", "top"],
			defaultValue: '"drawer"',
			description: "Variant for mobile navigation display.",
			isRequired: false,
		},
		{
			name: "navMobileBackground",
			type: "string",
			possibleValues: null,
			defaultValue: "backgroundColor",
			description: "Background color for mobile navigation.",
			isRequired: false,
		},
		{
			name: "headerOpenMobileBackground",
			type: "string",
			possibleValues: null,
			defaultValue: "backgroundColor",
			description: "Background color when mobile menu is open.",
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
			name: "search",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Search component to display in the header.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: null,
			defaultValue: '"primary"',
			description: "Background color for the header.",
			isRequired: false,
		},
		{
			name: "textColor",
			type: "string",
			possibleValues: null,
			defaultValue: '"white"',
			description: "Text color for header content.",
			isRequired: false,
		},
		{
			name: "linksColor",
			type: "string",
			possibleValues: null,
			defaultValue: '"white"',
			description: "Color for navigation links.",
			isRequired: false,
		},
		{
			name: "position",
			type: "string",
			possibleValues: ["relative", "absolute", "fixed"],
			defaultValue: '"relative"',
			description: "CSS position property for the header.",
			isRequired: false,
		},
		{
			name: "hideOnScroll",
			type: "number | boolean",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether to hide header on scroll, or scroll threshold in pixels. Only available when position is 'fixed'.",
			isRequired: false,
		},
	],
}
