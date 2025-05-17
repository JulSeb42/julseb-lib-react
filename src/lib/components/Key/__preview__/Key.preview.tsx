import { designTokens, Key, capitalize } from "../../../"
import type { LibKeySize } from "../../../types"
import type { ILibKey } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const keys = ["⌘", "K"]
const sizes: Array<LibKeySize> = Object.keys(
	designTokens.libKeySizes,
) as Array<LibKeySize>

export const keyPreview: ComponentPreview<ILibKey> = {
	name: "Key",
	component: Key,
	category: "components",
	import: "Key", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibKey", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLSpanElement"],
	previews: [
		...sizes.map(size => ({
			previewTitle: capitalize(size),
			props: {
				keys,
				size,
			},
		})),
		...sizes.map(size => ({
			previewTitle: `${capitalize(size)} with separator`,
			props: {
				keys,
				size,
				withSeparator: true,
			},
		})),
	],
}
