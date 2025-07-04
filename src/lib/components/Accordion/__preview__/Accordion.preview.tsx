import { Accordion } from "../../../"
import type { LibAccordionItem } from "../../../types"
import type { ILibAccordion } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibAccordionItem> = [
	{
		title: "Item",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
		defaultOpen: true,
	},
	{
		title: "Item",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
	},
	{
		title: "Item",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
	},
]

export const accordionPreview: ComponentPreview<ILibAccordion> = {
	name: "Accordion",
	component: Accordion,
	category: "components",
	import: "Accordion", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: ["AccordionItem"], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibAccordion", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: ["LibAccordionItem"], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { items } },
		{
			previewTitle: "Rounded",
			props: { items, icon: "chevron", variant: "rounded" },
		},
	],
	propsTitle: "Accordion",
	props: [
		{
			name: "variant",
			type: "string",
			possibleValues: ["basic", "rounded"],
			defaultValue: "basic",
			description: "Visual style variant of the accordion.",
			isRequired: false,
		},
		{
			name: "icon",
			type: "string",
			possibleValues: ["plus", "chevron"],
			defaultValue: "plus",
			description:
				"Type of icon to display for expand/collapse indicators.",
			isRequired: false,
		},
		{
			name: "items",
			type: "Array of objects",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of accordion items with title, content, and defaultOpen properties.",
			isRequired: false,
		},
	],
	propsSecondTitle: "AccordionItem",
	propsSecond: [
		{
			name: "title",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Title content to display in the accordion header.",
			isRequired: true,
		},
		{
			name: "icon",
			type: "string",
			possibleValues: ["plus", "chevron"],
			defaultValue: "plus",
			description:
				"Type of icon to display for expand/collapse indicator.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["basic", "rounded"],
			defaultValue: "basic",
			description: "Visual style variant of the accordion item.",
			isRequired: false,
		},
		{
			name: "defaultOpen",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether the accordion should be open by default.",
			isRequired: false,
		},
	],
}
