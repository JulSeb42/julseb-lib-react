import type { ForwardRefExoticComponent, RefAttributes } from "react"
import { toKebabCase } from "@julseb-lib/utils"
import type { ComponentPaths } from "../routes"
import { colorsPreview } from "./previews/styles/Colors.preview"
import { overlaysPreview } from "./previews/styles/Overlays.preview"
import { textPreview } from "../lib/components/Text/__preview__/Text.preview"
import { shadowsPreview } from "./previews/styles/Shadows.preview"
import { spacersPreview } from "./previews/styles/Spacers.preview"
import { radiusesPreview } from "./previews/styles/Radiuses.preview"
import { themeProviderPreview } from "./previews/styles/Theme.preview"
import { wrapperPreview } from "../lib/components/Wrapper/__preview__/Wrapper.preview"
import { mainPreview } from "../lib/components/Main/__preview__/Main.preview"
import { asidePreview } from "../lib/components/Aside/__preview__/Aside.preview"
import { sectionPreview } from "../lib/components/Section/__preview__/Section.preview"
import { gridPreview } from "../lib/components/Grid/__preview__/Grid.preview"
import { flexboxPreview } from "../lib/components/Flexbox/__preview__/Flexbox.preview"
import { keyPreview } from "../lib/components/Key/__preview__/Key.preview"
import { highlightPreview } from "../lib/components/Highlight/__preview__/Highlight.preview"
import { linkifyPreview } from "../lib/components/Linkify/__preview__/Linkify.preview"
import { tooltipPreview } from "../lib/components/Tooltip/__preview__/Tooltip.preview"
import { hrPreview } from "../lib/components/Hr/__preview__/Hr.preview"
import { skeletonPreview } from "../lib/components/Skeleton/__preview__/Skeleton.preview"
import { imagePreview } from "../lib/components/Image/__preview__/Image.preview"
import { masonryPreview } from "../lib/components/Masonry/__preview__/Masonry.preview"
import { badgePreview } from "../lib/components/Badge/__preview__/Badge.preview"
import { avatarPreview } from "../lib/components/Avatar/__preview__/Avatar.preview"
import { loaderPreview } from "../lib/components/Loader/__preview__/Loader.preview"
import { burgerPreview } from "../lib/components/Burger/__preview__/Burger.preview"
import { buttonPreview } from "../lib/components/Button/__preview__/Button.preview"
import { buttonIconPreview } from "../lib/components/ButtonIcon/__preview__/ButtonIcon.preview"
import { buttonGroupPreview } from "../lib/components/ButtonGroup/__preview__/ButtonGroup.preview"
import { tagPreview } from "../lib/components/Tag/__preview__/Tag.preview"
import { inputPreview } from "../lib/components/Input/__preview__/Input.preview"
import { inputImagePreview } from "../lib/components/InputImage/__preview__/InputImage.preview"
import { inputCheckPreview } from "../lib/components/InputCheck/__preview__/InputCheck.preview"
import { inputPhonePreview } from "../lib/components/InputPhone/__preview__/InputPhone.preview"
import { inputCounterPreview } from "../lib/components/InputCounter/__preview__/InputCounter.preview"
import { inputSliderPreview } from "../lib/components/InputSlider/__preview__/InputSlider.preview"
/* Prepend import - DO NOT REMOVE */

export type PreviewProp<T> = {
	props: T
}

export type PreviewDemo = {
	demo: ReactElement
}

type Prop = {
	name: string
	type:
		| ""
		| "string"
		| "Array<string>"
		| "number"
		| "boolean"
		| "string | number"
		| "string | Object"
		| "boolean | number | string | Object"
		| "number | string | Object"
		| "Object"
		| "boolean | Object"
		| "Array of objects"
		| "function"
		| "string | JSX.Element"
		| "ReactNode"
		| "CSSProperties"
		| "ReactElement"
	possibleValues:
		| Array<string>
		| "Any color from the library"
		| "Any color or overlay from the library"
		| null
	defaultValue: string | null
	description: string
	isRequired: boolean
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
	propsTitle?: string
	props: Array<Prop> | null
	propsSecondTitle?: string
	propsSecond?: Array<Prop>
}

export const previews: Array<ComponentPreview<any>> = [
	colorsPreview,
	overlaysPreview,
	textPreview,
	shadowsPreview,
	spacersPreview,
	radiusesPreview,
	themeProviderPreview,
	wrapperPreview,
	mainPreview,
	asidePreview,
	sectionPreview,
	gridPreview,
	flexboxPreview,
	keyPreview,
	highlightPreview,
	linkifyPreview,
	tooltipPreview,
	hrPreview,
	skeletonPreview,
	imagePreview,
	masonryPreview,
	badgePreview,
	avatarPreview,
	loaderPreview,
	burgerPreview,
	buttonPreview,
	buttonIconPreview,
	buttonGroupPreview,
	tagPreview,
	inputPreview,
	inputImagePreview,
	inputCheckPreview,
	inputPhonePreview,
	inputCounterPreview,
	inputSliderPreview,
	/* Prepend array - DO NOT REMOVE */
]

export const componentPaths: ComponentPaths = previews.map(preview => ({
	path: `/${toKebabCase(preview.name)}`,
}))
