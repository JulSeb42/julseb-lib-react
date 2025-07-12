import { Link } from "react-router-dom"
import { BiStar } from "react-icons/bi"
import { ListGroup, convertDateShort, Badge, Text } from "../../../"
import type { LibListGroupItem } from "../../../types"
import type { ILibListGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibListGroupItem> = [
	{
		title: "Basic item",
	},
	{
		title: "With text",
		body: "And body",
	},
	{
		title: "With badge and number",
		contentRight: (
			<Badge color="danger" className="px-2">
				350
			</Badge>
		),
	},
	{
		title: "With badge and icon",
		contentRight: (
			<Badge color="success">
				<BiStar />
			</Badge>
		),
		className: "bg-danger-500",
	},
	{
		title: "With color badge",
		contentRight: <Badge color="warning" />,
	},
	{
		title: "Router link",
		contentRight: (
			<Text tag="small" color="gray">
				{convertDateShort("2022-09-07")}
			</Text>
		),
		body: "Body",
		element: Link,
		// @ts-ignore
		to: "/",
	},
	{
		title: "Anchor link",
		contentRight: (
			<Text tag="small" color="gray">
				{convertDateShort("2022-09-07")}
			</Text>
		),
		body: "Body",
		element: "a",
		// @ts-ignore
		href: "#",
	},
	{
		title: "Button",
		contentRight: (
			<Text tag="small" color="gray">
				{convertDateShort("2022-09-07")}
			</Text>
		),
		body: "Body",
		element: "button",
		// @ts-ignore
		onClick: () => alert("Clicked!"),
	},
	{
		title: "Button disabled",
		contentRight: (
			<Text tag="small" color="gray">
				{convertDateShort("2022-09-07")}
			</Text>
		),
		element: "button",
		// @ts-ignore
		onClick: () => alert("Clicked!"),
		// @ts-ignore
		disabled: true,
	},
]

export const listGroupPreview: ComponentPreview<ILibListGroup> = {
	name: "List Group",
	component: ListGroup,
	category: "components",
	import: "ListGroup",
	additionalImports: [],
	optionalImports: ["ListGroupTitle", "ListGroupItem"],
	propsImport: "ILibListGroup",
	additionalTypeImports: ["LibListGroupItem"],
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: { items, title: "Hello World", showNumbers: true },
		},
		{
			previewTitle: "With max height",
			props: {
				items,
				title: {
					text: "Title",
					isFixed: true,
					shadowOnScroll: "lg",
					className: "bg-black",
				},
				className: "max-h-[300px]",
				noSeparator: true,
			},
		},
	],
	propsTitle: "ListGroup",
	props: [
		{
			name: "title",
			type: "string | Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Title text or configuration object for the list group header.",
			isRequired: false,
		},
		{
			name: "noSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide separators between list items.",
			isRequired: false,
		},
		{
			name: "showNumbers",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to display numbers next to each list item.",
			isRequired: false,
		},
		{
			name: "items",
			type: "Array of objects",
			possibleValues: [],
			defaultValue: null,
			description: "Array of item objects to render as list items.",
			isRequired: false,
		},
	],
	propsSecondTitle: "ListGroupTitle",
	propsSecond: [
		{
			name: "isFixed",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether the title should be sticky positioned at the top.",
			isRequired: false,
		},
		{
			name: "noSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide the bottom border separator.",
			isRequired: false,
		},
		{
			name: "shadow",
			type: "string",
			possibleValues: [
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"inner",
				"none",
			],
			defaultValue: null,
			description: "Shadow variant to apply when scrolled.",
			isRequired: false,
		},
		{
			name: "listRef",
			type: "Ref",
			possibleValues: [],
			defaultValue: null,
			description:
				"Ref to the scrollable list container for scroll detection.",
			isRequired: false,
		},
	],
	propsThirdTitle: "ListGroupItem",
	propsThird: [
		{
			name: "title",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Title text to display for the list item.",
			isRequired: true,
		},
		{
			name: "body",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Body text or description to display below the title.",
			isRequired: false,
		},
		{
			name: "contentRight",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description:
				"Content to display on the right side of the list item.",
			isRequired: false,
		},
		{
			name: "noSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether to hide the separator border between list items.",
			isRequired: false,
		},
		{
			name: "number",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description:
				"Number to display before the title when using numbered lists.",
			isRequired: false,
		},
	],
}
