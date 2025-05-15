import type { ForwardRefExoticComponent, RefAttributes } from "react"
import { toKebabCase } from "@julseb-lib/utils"
import type { ComponentPaths } from "../routes"

import { colorsPreview } from "./previews/styles/Colors.preview"
import { overlaysPreview } from "./previews/styles/Overlays.preview"
import { textPreview } from "../lib/components/Text/__preview__/Text.preview"
import { shadowsPreview } from "./previews/styles/Shadows.preview"
import { radiusesPreview } from "./previews/styles/Radiuses.preview"
/* Prepend import - DO NOT REMOVE */

export type PreviewProp<T> = {
	props: T
}

export type PreviewDemo = {
	demo: ReactElement
}

export interface ComponentPreview<T> {
	name: string
	component:
		| FC<any>
		| ForwardRefExoticComponent<T & RefAttributes<any>>
		| null
	category: "styles" | "layouts" | "components" | "helpers"
	import: string | null // import Component (ex: Skeleton)
	additionalImports: Array<string> | null // import OtherComponent (ex: SkeletonCard)
	optionalImports: Array<string> | null // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: string | null // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: Array<string> | null // import ILibComponentItem (ex: ILibAccordionItem)
	extends: Array<string> | Array<{ name: string; from: string }> | null
	noStretch?: boolean
	// TODO?: noAs: boolean
	// TODO?: noRef?: boolean
	previews: Array<
		(PreviewProp<T> | PreviewDemo) & {
			previewTitle?: string
		}
	> | null
}

export const previews: Array<ComponentPreview<any>> = [
	colorsPreview,
	overlaysPreview,
	textPreview,
	shadowsPreview,
	radiusesPreview,
	/* Prepend array - DO NOT REMOVE */
]

export const componentPaths: ComponentPaths = previews.map(preview => ({
	path: `/${toKebabCase(preview.name)}`,
}))
