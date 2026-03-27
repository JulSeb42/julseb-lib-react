import { CollapsedText } from "../../../"
import type { ILibCollapsedText } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const collapsedTextPreview: ComponentPreview<ILibCollapsedText> = {
	name: "CollapsedText",
	component: CollapsedText,
	category: "components",
	import: "CollapsedText", // import Component (ex: Skeleton)
	additionalImports: null, // import OtherComponent (ex: SkeletonCard)
	optionalImports: null, // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibCollapsedText", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: null, // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: {
				children:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend nunc massa, sit amet tempor lectus blandit nec. Nulla gravida vestibulum turpis vel faucibus. Suspendisse auctor lectus vitae cursus aliquet. Fusce semper a sem sodales hendrerit. Ut ornare dolor facilisis, tempus urna ac, finibus tellus. Aenean sed nisl posuere, blandit lorem vitae, blandit orci. Nam metus quam, lacinia eget bibendum nec, interdum nec felis. Nunc a elit vitae enim pellentesque posuere. Vivamus ullamcorper odio ut diam aliquet congue. Fusce non commodo ex, ac porta nunc. Cras ac felis est. Aliquam erat volutpat. In in molestie tortor, vitae bibendum sem. Praesent suscipit massa vel arcu auctor molestie.",
				// collapsedMaxLines: 4,
			},
		},
	],
	props: [
		{
			name: "defaultOpen",
			type: "boolean",
			possibleValues: ["true", "false"],
			defaultValue: "false",
			description: "If true, shows the line numbers in the code block.",
			isRequired: false,
		},
		{
			name: "collapsedMaxLines",
			type: "number",
			possibleValues: null,
			defaultValue: "3",
			description: "Number of lines shown when the text is collapsed",
			isRequired: false,
		},
		{
			name: "texts",
			type: "Object",
			possibleValues: null,
			defaultValue: "read: Read; more: more; less: less",
			description: "Changes the button's text",
			isRequired: false,
		},
		{
			name: "textProps",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description: "Props for the Text component",
			isRequired: false,
		},
	],
}
