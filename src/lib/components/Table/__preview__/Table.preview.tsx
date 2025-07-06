import { Table, toTitleCase } from "../../../"
import type { ReactChildren } from "../../../types"
import type { ILibTable } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const users: Array<User> = [
	{
		id: 1,
		firstName: "Anna",
		lastName: "Fali",
		facebook: "Anna Fali",
		twitter: "@anna.fali",
	},
	{
		id: 2,
		firstName: "Niek",
		lastName: "Bove",
		facebook: "Niek Bove",
		twitter: "@niek.bove",
	},
	{
		id: 3,
		firstName: "Lacara",
		lastName: "Jones",
		facebook: "Lacara Jones",
		twitter: "@lacara.jones",
	},
	{
		id: 4,
		firstName: "Pablo",
		lastName: "Cambeiro",
		facebook: "Pablo Cambeiro",
		twitter: "@pablo.cambeiro",
	},
	{
		id: 5,
		firstName: "Irene",
		lastName: "Sotelo",
		facebook: "Irene Sotelo",
		twitter: "@irene.sotelo",
	},
]

const headers: Array<ReactChildren> = [
	...new Set(
		users
			.map(user => Object.keys(user))
			.flat()
			.map(key => toTitleCase(key)),
	),
]

const data: Array<Array<ReactChildren>> = users.map(user =>
	Object.values(user).map((v, i) =>
		i === Object.values(user).length - 1 ? `http://twitter.com/${v}` : v,
	),
)

export const tablePreview: ComponentPreview<ILibTable> = {
	name: "Table",
	component: Table,
	category: "components",
	import: "Table", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibTable", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLTableElement"],
	previews: [
		{ previewTitle: "Default", props: { headers, data, linkify: true } },

		{
			previewTitle: "Border bottom",
			props: {
				headers,
				data,
				linkify: true,
				variant: "border-bottom",
				className: "[&_td:last-child]:p-0",
			},
		},
		{
			previewTitle: "Stripped",
			props: { headers, data, linkify: true, variant: "stripped" },
		},
	],
	props: [
		{
			name: "variant",
			type: "string",
			possibleValues: ["bordered", "stripped", "border-bottom"],
			defaultValue: "bordered",
			description: "Visual variant for table styling.",
			isRequired: false,
		},
		{
			name: "vAlign",
			type: "string",
			possibleValues: [
				"align-baseline",
				"align-top",
				"align-middle",
				"align-bottom",
				"align-text-top",
				"align-text-bottom",
				"align-sub",
				"align-super",
			],
			defaultValue: "align-top",
			description: "Vertical alignment for table cells.",
			isRequired: false,
		},
		{
			name: "textAlign",
			type: "string",
			possibleValues: ["left", "center", "right", "justify"],
			defaultValue: "left",
			description: "Text alignment for table content.",
			isRequired: false,
		},
		{
			name: "headers",
			type: "Array of React Element",
			possibleValues: [],
			defaultValue: null,
			description: "Array of header content for table columns.",
			isRequired: false,
		},
		{
			name: "footers",
			type: "Array of React Element",
			possibleValues: [],
			defaultValue: null,
			description: "Array of footer content for table columns.",
			isRequired: false,
		},
		{
			name: "data",
			type: "Array of array of ReactElement",
			possibleValues: [],
			defaultValue: null,
			description:
				"2D array of table data for automatic table generation. Cannot be used with children.",
			isRequired: false,
		},
		{
			name: "linkify",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether to automatically convert URLs in text to clickable links.",
			isRequired: false,
		},
		{
			name: "blank",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether links should open in new tab when linkify is enabled. Only available when linkify is true.",
			isRequired: false,
		},
	],
}

type User = {
	id: number
	firstName: string
	lastName: string
	facebook: string
	twitter: string
}
