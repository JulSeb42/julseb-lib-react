import { useState } from "react"
import { Link } from "react-router-dom"
import { Drawer, Button, Text } from "../../../"
import type {} from "../../../types"
import type { ILibDrawer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const links: Array<{ id: number; to: string; text: string }> = [
	{ id: 0, text: "Link", to: "#" },
	{ id: 1, text: "Link", to: "#" },
	{ id: 2, text: "Link", to: "#" },
	{ id: 3, text: "Link", to: "#" },
	{ id: 4, text: "Link", to: "#" },
]

const Preview: FC<Omit<ILibDrawer, "isOpen" | "setIsOpen">> = props => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>
				Open {props?.position}
			</Button>

			<Drawer isOpen={isOpen} setIsOpen={setIsOpen} {...props}>
				{links.map(link => (
					<Link key={link.id} to={link.to}>
						{link.text}
					</Link>
				))}
				<Text>Text</Text>
				<button>Button</button>
			</Drawer>
		</>
	)
}

export const drawerPreview: ComponentPreview<ILibDrawer> = {
	name: "Drawer",
	component: Drawer,
	category: "components",
	import: "Drawer", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibDrawer", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Left", demo: <Preview position="left" /> },
		{ previewTitle: "Right", demo: <Preview position="right" /> },
	],
	props: [
		{
			name: "isOpen",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether the drawer is currently open.",
			isRequired: true,
		},
		{
			name: "setIsOpen",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to control the drawer's open/closed state.",
			isRequired: true,
		},
		{
			name: "position",
			type: "string",
			possibleValues: ["left", "right", "top", "bottom"],
			defaultValue: "right",
			description: "Position of the drawer relative to the viewport.",
			isRequired: false,
		},
		{
			name: "enableScrollingOpen",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to allow page scrolling when drawer is open.",
			isRequired: false,
		},
		{
			name: "disableEsc",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether to disable closing the drawer with the Escape key.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "primary",
			description: "Background color for the drawer content area.",
			isRequired: false,
		},
		{
			name: "contentColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "white",
			description: "Text color for the drawer content.",
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
			description: "Color for links and buttons within the drawer.",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["0px", "2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: "md",
			description: "Gap between child elements in the drawer.",
			isRequired: false,
		},
		{
			name: "maxWidth",
			type: "string | number",
			possibleValues: [],
			defaultValue: "400",
			description: "Maximum width of the drawer in pixels.",
			isRequired: false,
		},
		{
			name: "overlayColor",
			type: "string",
			possibleValues: "Any color or overlay from the library",
			defaultValue: "black-80",
			description: "Background color for the overlay behind the drawer.",
			isRequired: false,
		},
		{
			name: "hideCloseButton",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide the close button in the drawer.",
			isRequired: false,
		},
	],
}
