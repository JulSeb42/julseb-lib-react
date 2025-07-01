import { InputCheck } from "../../../"
import { DemoCheckbox, DemoRadio } from "./Previews"
import type { ILibInputCheck } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCheckPreview: ComponentPreview<ILibInputCheck> = {
	name: "Input Check",
	component: InputCheck,
	category: "components",
	import: "InputCheck", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibInputCheck", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLInputElement"],
	previews: [
		{
			previewTitle: "Checkbox",
			demo: <DemoCheckbox />,
		},
		{
			previewTitle: "Radio",
			demo: <DemoRadio />,
		},
		{
			previewTitle: "Checkbox tile",
			demo: <DemoCheckbox variant="tile" />,
		},
		{
			previewTitle: "Radio tile",
			demo: <DemoRadio variant="tile" />,
		},
		{
			previewTitle: "Checkbox toggle",
			demo: <DemoCheckbox variant="toggle">Toggle</DemoCheckbox>,
		},
		{
			previewTitle: "Checkbox selector",
			demo: <DemoCheckbox variant="selector">Selector</DemoCheckbox>,
		},
	],
	props: [
		{
			name: "id",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Unique identifier for the input element.",
			isRequired: true,
		},
		{
			name: "type",
			type: "string",
			possibleValues: ["checkbox", "radio"],
			defaultValue: "checkbox",
			description: "Type of input check to render.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["tile", "toggle", "selector"],
			defaultValue: null,
			description: "Visual variant style of the input check.",
			isRequired: false,
		},
		{
			name: "iconCheck",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: "BiCheck",
			description: "Icon element to display in checkbox variant.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Validation state for error styling.",
			isRequired: false,
		},
	],
}
