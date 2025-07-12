import { designTokens, Key, capitalize } from "../../../"
import type { LibKeySize } from "../../../types"
import type { ILibKey } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const children = "⌘K"
const sizes: Array<LibKeySize> = Object.keys(
	designTokens.libKeySizes,
) as Array<LibKeySize>

export const keyPreview: ComponentPreview<ILibKey> = {
	name: "Key",
	component: Key,
	category: "components",
	import: "Key",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibKey",
	additionalTypeImports: null,
	extends: ["HTMLSpanElement"],
	previews: [
		...sizes.map(size => ({
			previewTitle: capitalize(size),
			props: {
				children,
				size,
			},
		})),
		...sizes.map(size => ({
			previewTitle: `${capitalize(size)} with separator`,
			props: {
				children,
				size,
				withSeparator: true,
			},
		})),
	],
	props: [
		{
			name: "keys",
			type: "Array<string>",
			possibleValues: null,
			defaultValue: null,
			description: "The list of keys to display.",
			isRequired: true,
		},
		{
			name: "withSeparator",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "If true, displays a separator between keys.",
			isRequired: false,
		},
		{
			name: "size",
			type: "string",
			possibleValues: ["default", "large", "form"],
			defaultValue: null,
			description: "The size of the key component.",
			isRequired: false,
		},
		{
			name: "accentColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
			],
			defaultValue: null,
			description:
				"Accent color for the key, excluding black, white, transparent, background, and current.",
			isRequired: false,
		},
	],
}
