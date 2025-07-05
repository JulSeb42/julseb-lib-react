import { useState } from "react"
import { DragList, Badge, Text, Flexbox, convertDateShort } from "../../.."
import type { LibDragListItem } from "../../../types"
import type { ILibDragList } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const DragListDemo = (
	props: Omit<ILibDragList, "items" | "setItems" | "children">,
) => {
	const [items, setItems] = useState<Array<LibDragListItem>>([
		{ id: "0", title: "First", body: "Body" },
		{
			id: "1",
			title: (
				<Flexbox
					alignItems="center"
					justifyContent="space-between"
					gap="xs"
					className="w-full"
				>
					<Text tag="h6">Second</Text>
					<Badge color="success" className="min-w-2 size-2" />
				</Flexbox>
			),
		},
		{
			id: "2",
			title: (
				<Flexbox
					alignItems="center"
					justifyContent="space-between"
					gap="xs"
					className="w-full"
				>
					<Text tag="strong">Third</Text>
					<Text color="gray" tag="small">
						{convertDateShort(new Date())}
					</Text>
				</Flexbox>
			),
			body: "Item",
		},
	])

	return <DragList items={items} setItems={setItems} {...props} />
}

export const draglistPreview: ComponentPreview<ILibDragList> = {
	name: "Drag List",
	component: DragList,
	category: "components",
	import: "DragList", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibDraglist", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [{ previewTitle: "Default", demo: <DragListDemo /> }],
	propsTitle: "DragList",
	props: [
		{
			name: "iconDrag",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: null,
			description: "Icon to display as the drag handle for each item.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: ["xs", "sm", "md", "lg", "xl", "full"],
			defaultValue: null,
			description: "Border radius size for the drag list container.",
			isRequired: false,
		},
		{
			name: "items",
			type: "Array of objects",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of draggable items with id, title, and body properties.",
			isRequired: false,
		},
		{
			name: "setItems",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description:
				"Function to update the items array when items are reordered.",
			isRequired: false,
		},
		{
			name: "hideSeparator",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide separators between draggable items.",
			isRequired: false,
		},
	],
	propsSecondTitle: "DragListItem",
	propsSecond: [
		{
			name: "item",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Item object containing id, title, and body properties. Only when children is not defined.",
			isRequired: true,
		},
		{
			name: "index",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Index position of the item in the drag list.",
			isRequired: true,
		},
		{
			name: "handleDragStart",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function called when drag operation starts.",
			isRequired: true,
		},
		{
			name: "handleDragOver",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function called when dragging over this item.",
			isRequired: true,
		},
		{
			name: "iconDrag",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: "BiDotsVerticalRounded",
			description: "Icon to display as the drag handle.",
			isRequired: false,
		},
		{
			name: "iconLabel",
			type: "string",
			possibleValues: [],
			defaultValue: "Drag",
			description: "Aria label for the drag handle button.",
			isRequired: false,
		},
	],
}
