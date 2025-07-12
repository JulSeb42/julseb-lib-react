import { Tabs, Text } from "../../../"
import type { LibTabItem } from "../../../types"
import type { ILibTabs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibTabItem> = [
	{
		title: "First",
		content: "Content tab 1",
	},
	{
		title: "Second",
		content: (
			<>
				<Text>Hello</Text>
				<Text>World</Text>
			</>
		),
	},
	{
		title: "Third",
		content: "Content tab 3",
	},
]

export const tabsPreview: ComponentPreview<ILibTabs> = {
	name: "Tabs",
	component: Tabs,
	category: "components",
	import: "Tabs",
	additionalImports: [],
	optionalImports: [
		"TabsButton",
		"TabsButtonsContainer",
		"TabsContainer",
		"TabsContent",
	],
	propsImport: "ILibTabs",
	additionalTypeImports: ["LibTabItem"],
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { items } },
		{
			previewTitle: "Rounded",
			props: { items, variant: "rounded", justify: "stretch" },
		},
	],
	propsTitle: "TabsContainer",
	props: [],
	propsSecondTitle: "TabsButtonsContainer",
	propsSecond: [
		{
			name: "justify",
			type: "string",
			possibleValues: ["start", "stretch"],
			defaultValue: "start",
			description:
				"Justification for positioning tabs within their container.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["basic", "rounded"],
			defaultValue: "basic",
			description: "Visual variant for styling the tab buttons.",
			isRequired: false,
		},
	],
	propsThirdTitle: "TabsButton",
	propsThird: [
		{
			name: "isActive",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether this tab button is currently active/selected.",
			isRequired: true,
		},
		{
			name: "onClick",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Click handler function for tab selection.",
			isRequired: true,
		},
		{
			name: "justify",
			type: "string",
			possibleValues: ["start", "stretch"],
			defaultValue: "start",
			description: "Justification for positioning the button content.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["basic", "rounded"],
			defaultValue: "basic",
			description: "Visual variant for styling the tab button.",
			isRequired: false,
		},
	],
	propsFourthTitle: "TabsContent",
	propsFourth: [
		{
			name: "isActive",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether this tab content is currently active/visible.",
			isRequired: true,
		},
	],
	propsFifthTitle: "Tabs",
	propsFifth: [
		{
			name: "items",
			type: "Array of objects",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of tab items containing title and content for each tab.",
			isRequired: true,
		},
		{
			name: "justify",
			type: "string",
			possibleValues: ["start", "stretch"],
			defaultValue: "start",
			description:
				"Justification for positioning tabs within their container.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["basic", "rounded"],
			defaultValue: "basic",
			description: "Visual variant for styling the tab buttons.",
			isRequired: false,
		},
		{
			name: "activeTab",
			type: "number",
			possibleValues: [],
			defaultValue: "0",
			description: "Index of the initially active tab.",
			isRequired: false,
		},
	],
}
