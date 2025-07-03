import { InputPhone } from "../../../"
import { Preview } from "./Preview"
import type { ILibInputPhone } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPhonePreview: ComponentPreview<ILibInputPhone> = {
	name: "Input Phone",
	component: InputPhone,
	category: "components",
	import: "InputPhone", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibInputPhone", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLInputElement"],
	previews: [
		{
			previewTitle: "Default",
			demo: <Preview />,
		},
		{
			previewTitle: "Background light",
			demo: <Preview inputBackground="light" />,
		},
		{
			previewTitle: "Background dark",
			demo: <Preview inputBackground="dark" />,
		},
		{
			previewTitle: "Pill",
			demo: <Preview inputVariant="pill" listDirection="up" />,
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview validation={{ status: false, message: "Message" }} />
			),
		},
	],
	props: [
		{
			name: "selectedCountry",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Currently selected country object with code, name, flag, and dial_code.",
			isRequired: false,
		},
		{
			name: "setSelectedCountry",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description: "Function to update the selected country state.",
			isRequired: false,
		},
		{
			name: "defaultCountry",
			type: "string",
			possibleValues: null,
			defaultValue: "fr",
			description:
				"Default country code to display when no country is selected.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Icon configuration object for customizing dropdown caret icon and search icon.",
			isRequired: false,
		},
		{
			name: "searchPlaceholder",
			type: "string",
			possibleValues: null,
			defaultValue: "Search country...",
			description: "Placeholder text for the country search input.",
			isRequired: false,
		},
		{
			name: "listDirection",
			type: "string",
			possibleValues: ["up", "down"],
			defaultValue: "down",
			description: "Direction for the dropdown list to appear.",
			isRequired: false,
		},
		{
			name: "countryButtonAriaLabel",
			type: "string",
			possibleValues: null,
			defaultValue: "Select country",
			description: "Aria label for the country selection button.",
			isRequired: false,
		},
		{
			name: "textNoResult",
			type: "string",
			possibleValues: null,
			defaultValue: "Your search did not return any result.",
			description: "Text to display when no search results are found.",
			isRequired: false,
		},
		{
			name: "label",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Label text to display above the input.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display at the bottom of the input.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
		{
			name: "inputVariant",
			type: "string",
			possibleValues: ["rounded", "pill"],
			defaultValue: "rounded",
			description: "Visual variant of the input.",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: null,
			description: "Background theme of the input.",
			isRequired: false,
		},
	],
}
