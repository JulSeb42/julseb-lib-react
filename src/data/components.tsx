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
import { lazyImagePreview } from "../lib/components/LazyImage/__preview__/LazyImage.preview"
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
import { selectPreview } from "../lib/components/Select/__preview__/Select.preview"
import { autocompletePreview } from "../lib/components/Autocomplete/__preview__/Autocomplete.preview"
import { ratingPreview } from "../lib/components/Rating/__preview__/Rating.preview"
import { inputPinPreview } from "../lib/components/InputPin/__preview__/InputPin.preview"
import { fieldsetPreview } from "../lib/components/Fieldset/__preview__/Fieldset.preview"
import { formPreview } from "../lib/components/Form/__preview__/Form.preview"
import { listGroupPreview } from "../lib/components/ListGroup/__preview__/ListGroup.preview"
import { breadcrumbsPreview } from "../lib/components/Breadcrumbs/__preview__/Breadcrumbs.preview"
import { accordionPreview } from "../lib/components/Accordion/__preview__/Accordion.preview"
import { dropdownPreview } from "../lib/components/Dropdown/__preview__/Dropdown.preview"
import { toastPreview } from "../lib/components/Toast/__preview__/Toast.preview"
import { alertPreview } from "../lib/components/Alert/__preview__/Alert.preview"
import { modalPreview } from "../lib/components/Modal/__preview__/Modal.preview"
import { draglistPreview } from "../lib/components/DragList/__preview__/Draglist.preview"
import { paginationPreview } from "../lib/components/Pagination/__preview__/Pagination.preview"
import { paginatorPreview } from "../lib/components/Paginator/__preview__/Paginator.preview"
import { progressBarPreview } from "../lib/components/ProgressBar/__preview__/ProgressBar.preview"
import { progressCirclePreview } from "../lib/components/ProgressCircle/__preview__/ProgressCircle.preview"
import { tabsPreview } from "../lib/components/Tabs/__preview__/Tabs.preview"
import { slideshowPreview } from "../lib/components/Slideshow/__preview__/Slideshow.preview"
import { carouselPreview } from "../lib/components/Carousel/__preview__/Carousel.preview"
import { coverPreview } from "../lib/components/Cover/__preview__/Cover.preview"
import { tablePreview } from "../lib/components/Table/__preview__/Table.preview"
import { pageLoadingPreview } from "../lib/components/PageLoading/__preview__/PageLoading.preview"
import { stickyPreview } from "../lib/components/Sticky/__preview__/Sticky.preview"
import { markdownEditorPreview } from "../lib/components/MarkdownEditor/__preview__/MarkdownEditor.preview"
import { markdownContainerPreview } from "../lib/components/MarkdownContainer/__preview__/MarkdownContainer.preview"
import { codeContainerPreview } from "../lib/components/CodeContainer/__preview__/CodeContainer.preview"
import { fadePreview } from "../lib/components/Fade/__preview__/Fade.preview"
import { backToTopPreview } from "../lib/components/BackToTop/__preview__/BackToTop.preview"
import { drawerPreview } from "../lib/components/Drawer/__preview__/Drawer.preview"
import { headerPreview } from "../lib/components/Header/__preview__/Header.preview"
import { footerPreview } from "../lib/components/Footer/__preview__/Footer.preview"
import { metaPreview } from "../lib/components/Meta/__preview__/Meta.preview"
import { pageLayoutPreview } from "../lib/components/PageLayout/__preview__/PageLayout.preview"
import { srOnlyPreview } from "../lib/components/SrOnly/__preview__/SrOnly.preview"
import { variablesPreview } from "./previews/helpers/Variables.Preview"
import { utilsPreview } from "./previews/helpers/Utils.Preview"
import { hooksPreview } from "./previews/helpers/Hooks.Preview"
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
		| "number | boolean"
		| "ReactNode"
		| "CSSProperties"
		| "ReactElement"
		| "Ref"
		| "Array of array of ReactElement"
		| "Array of React Element"
		| "Array of React Element or Array of string"
		| "ILibMeta"
		| "ILibHeader"
		| "ILibFooter"
		| "ILibWrapper"
		| "ILibMain"
		| "string | Array<string>"
	possibleValues:
		| Array<string | number>
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
	propsThirdTitle?: string
	propsThird?: Array<Prop>
	propsFourthTitle?: string
	propsFourth?: Array<Prop>
	propsFifthTitle?: string
	propsFifth?: Array<Prop>
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
	lazyImagePreview,
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
	selectPreview,
	autocompletePreview,
	ratingPreview,
	inputPinPreview,
	fieldsetPreview,
	formPreview,
	listGroupPreview,
	breadcrumbsPreview,
	accordionPreview,
	dropdownPreview,
	toastPreview,
	alertPreview,
	modalPreview,
	draglistPreview,
	paginationPreview,
	paginatorPreview,
	progressBarPreview,
	progressCirclePreview,
	tabsPreview,
	slideshowPreview,
	carouselPreview,
	coverPreview,
	tablePreview,
	pageLoadingPreview,
	stickyPreview,
	markdownEditorPreview,
	markdownContainerPreview,
	codeContainerPreview,
	fadePreview,
	backToTopPreview,
	drawerPreview,
	headerPreview,
	footerPreview,
	metaPreview,
	pageLayoutPreview,
	srOnlyPreview,
	variablesPreview,
	utilsPreview,
	hooksPreview,
	/* Prepend array - DO NOT REMOVE */
]

export const componentPaths: ComponentPaths = previews.map(preview => ({
	path: `/${toKebabCase(preview.name)}`,
}))
