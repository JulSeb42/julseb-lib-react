import { Key, capitalize, designTokens } from "../../../"
import type { LibKeySize } from "../../../types"
import type { ComponentPreview } from "../../../../data/components"
import type { ILibKey } from "../../../types/components-props"

const keys = ["⌘", "K"]
const sizes: Array<LibKeySize> = Object.keys(
	designTokens.keySizes
) as Array<LibKeySize>

export const keyPreview: ComponentPreview<ILibKey> = {
	name: "Key",
	component: Key,
	category: "components",
	noStretch: true,
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
				keys,
				size,
				"data-testid": "testid",
				className: "className",
			},
		})),
		...sizes.map(size => ({
			previewTitle: `${capitalize(size)} with separator`,
			props: {
				keys,
				size,
				withSeparator: true,
				"data-testid": "testid",
				className: "className",
			},
		})),
	],
}
