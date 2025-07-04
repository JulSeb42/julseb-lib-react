import { Dropdown } from "../../../"
import { Preview } from "./Preview"
import type { ILibDropdown } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const dropdownPreview: ComponentPreview<ILibDropdown> = {
	name: "Dropdown",
	component: Dropdown,
	category: "components",
	import: "Dropdown", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: ["DropdownItem"], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibDropdown", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: ["LibDropdownItem"], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{ previewTitle: "Up", demo: <Preview direction="up" /> },
	],
	propsTitle: "Dropdown",
	props: [
		{
			name: "isOpen",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether the dropdown is currently visible.",
			isRequired: true,
		},
		{
			name: "setIsOpen",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to control the dropdown open/closed state.",
			isRequired: true,
		},
		{
			name: "direction",
			type: "string",
			possibleValues: ["up", "down"],
			defaultValue: "down",
			description:
				"Direction for the dropdown to appear relative to its trigger.",
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
			description: "Shadow variant to apply when dropdown is open.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: ["xs", "sm", "md", "lg", "xl", "full"],
			defaultValue: "md",
			description: "Border radius size for the dropdown container.",
			isRequired: false,
		},
		{
			name: "items",
			type: "Array of objects",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of dropdown item objects with content and click handlers.",
			isRequired: false,
		},
	],
	propsSecondTitle: "DropdownItem",
}
