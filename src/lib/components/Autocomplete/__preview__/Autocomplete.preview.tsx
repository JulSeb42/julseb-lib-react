import { BiSearch } from "react-icons/bi"
import { Autocomplete } from "../../../"
import { Preview } from "./Preview"
import type { ILibAutocomplete } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const autocompletePreview: ComponentPreview<ILibAutocomplete> = {
	name: "Autocomplete",
	component: Autocomplete,
	category: "components",
	import: "Autocomplete",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibAutocomplete",
	additionalTypeImports: [],
	extends: ["HTMLInputElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview label="Autocomplete" /> },
		{
			previewTitle: "With keys",
			demo: <Preview focusKeys={["Command", "KeyJ"]} showKeys />,
		},
		{
			previewTitle: "With validation false",
			demo: (
				<Preview validation={{ status: false, message: "Message" }} />
			),
		},
		{
			previewTitle: "With validation true",
			demo: <Preview validation={{ status: true, message: "Message" }} />,
		},
		{
			previewTitle: "With icon",
			demo: <Preview icons={{ left: <BiSearch /> }} />,
		},
		{
			previewTitle: "With background light",
			demo: <Preview inputBackground="light" />,
		},
		{
			previewTitle: "With background dark",
			demo: <Preview inputBackground="dark" />,
		},
		{ previewTitle: "Pill", demo: <Preview inputVariant="pill" /> },
		{ previewTitle: "Disabled", demo: <Preview disabled /> },
	],
	props: [
		{
			name: "value",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Current input value for searching.",
			isRequired: true,
		},
		{
			name: "setValue",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to update the input value.",
			isRequired: true,
		},
		{
			name: "listResults",
			type: "Array<string>",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of items to search through and display as results.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the autocomplete.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description:
				"Helper text to display at the bottom of the autocomplete.",
			isRequired: false,
		},
		{
			name: "inputVariant",
			type: "string",
			possibleValues: ["rounded", "pill"],
			defaultValue: "rounded",
			description: "Visual variant of the input field.",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: null,
			description: "Background theme of the input field.",
			isRequired: false,
		},
		{
			name: "listDirection",
			type: "string",
			possibleValues: ["up", "down"],
			defaultValue: "down",
			description: "Direction for the dropdown results to appear.",
			isRequired: false,
		},
		{
			name: "fuzzyOptions",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Configuration options for Fuse.js fuzzy search.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: "clear: BiX",
			description:
				"Icon configuration object with left icon and clear icon.",
			isRequired: false,
		},
		{
			name: "focusKeys",
			type: "Array<string>",
			possibleValues: [],
			defaultValue: null,
			description: "Array of keyboard shortcuts to focus the input.",
			isRequired: false,
		},
		{
			name: "showKeys",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to display the keyboard shortcut keys.",
			isRequired: false,
		},
		{
			name: "textNoResult",
			type: "string",
			possibleValues: [],
			defaultValue: "No result.",
			description: "Text to display when no search results are found.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
	],
}
