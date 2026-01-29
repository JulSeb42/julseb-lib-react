import type {
	HTMLAttributes,
	ElementType,
	ReactNode,
	Dispatch,
	SetStateAction,
	FunctionComponent,
	RefObject,
	CSSProperties as CSS,
	ReactElement as ReactEl,
} from "react"
import type { Property } from "csstype"
import type { designTokens } from "../utils/design-tokens"

/**
 * @description All color tokens available in the library.
 * @type {keyof typeof designTokens.libColors}
 * @example
 * color="danger-300"
 * color="gray-100"
 */
export type LibColors = keyof typeof designTokens.libColors

/**
 * @description All color short tokens available in the library. This returns the color-500.
 * @type {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black" | "white" | "current" | "transparent" | "background"}
 * @example
 * color="primary"
 * color="gray"
 */
export type LibColorsShort = keyof typeof designTokens.libColorsShort

/**
 * @description All color tokens and color short tokens available in the library.
 * @type {keyof typeof designTokens.libColors | "primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black" | "white" | "current" | "transparent" | "background"}
 * @example
 * color="danger-300"
 * color="primary"
 * color="gray-100"
 */
export type LibAllColors = LibColors | LibColorsShort

/**
 * @description All hover color tokens available in the library.
 * @type {"primary" | "secondary" | "success" | "danger" | "warning" | "white"}
 * @example
 * color="primary"
 * color="gray"
 */
export type LibColorsHover = keyof typeof designTokens.libColorsHover

/**
 * @description All hover color tokens plus "current" for currentColor support.
 * @type {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "current"}
 * @example
 * color="primary"
 * color="gray"
 * color="current"
 */
export type LibColorsHoverAndCurrent = LibColorsHover | "current"

/**
 * @description All overlay tokens available in the library.
 * @type {"black-50" | "black-80" | "white-50" | "white-80" | "gradient-black" | "gradient-white"}
 * @example
 * overlay="overlay-100"
 * overlay="overlay-dark"
 */
export type LibOverlays = keyof typeof designTokens.libOverlays

/**
 * @description All color and overlay tokens available in the library.
 * @type {Any color from the library | Any overlay from the library}
 * @example
 * color="primary"
 * color="gray-100"
 * overlay="overlay-100"
 * overlay="overlay-dark"
 */
export type LibAllColorsAndOverlays =
	| LibAllColors
	| keyof typeof designTokens.libOverlays

/**
 * @description All font family tokens available in the library.
 * @type {"body"|"code"}
 * @example
 * fontFamily="body"
 * fontFamily="code"
 */
export type LibFontFamilies = keyof typeof designTokens.libFontFamilies

/**
 * @description All font size tokens available in the library.
 * @type {"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"}
 * @example
 * fontSize="md"
 * fontSize="xl"
 */
export type LibFontSizes = keyof typeof designTokens.libFontSizes

/**
 * @description All font weight tokens available in the library.
 * @type {"thin" | "light" | "regular" | "bold" | "black"}
 * @example
 * fontWeight="regular"
 * fontWeight="bold"
 */
export type LibFontWeights = keyof typeof designTokens.libFontWeights

/**
 * @description All box shadow tokens available in the library.
 * @type {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none"}
 * @example
 * boxShadow="md"
 * boxShadow="xl"
 */
export type LibShadows = keyof typeof designTokens.libShadows

/**
 * @description All spacer tokens available in the library, plus "0px".
 * @type {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "0px"}
 * @example
 * padding="md"
 * margin="xl"
 * gap="xs"
 * padding="0px"
 */
export type LibSpacers = keyof typeof designTokens.libSpacers | "0px"

/**
 * @description All border radius tokens available in the library.
 * @type {"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full"}
 * @example
 * radius="m"
 * radius="xl"
 */
export type LibRadiuses = keyof typeof designTokens.libRadius

/**
 * @description All transition tokens available in the library.
 * @type {"none" | "all" | "default" | "colors" | "opacity" | "shadow" | "transform"}
 * @example
 * transition="all"
 * transition="colors"
 */
export type LibTransitions = keyof typeof designTokens.libTransitions

/**
 * @description Validation status for form components.
 * @type {boolean | undefined}
 * @example
 * validation={true}   // valid
 * validation={false}  // invalid
 * validation={undefined} // not validated
 */
export type LibValidationStatus = boolean | undefined

/**
 * @description Validation for input components.
 * @type {Object}
 * @example
 * validation={{ status: false, message: "Name is required" }}
 */
export type LibInputValidation = {
	status: LibValidationStatus
	message?: ReactChildren
	iconPassed?: ReactElement
	iconNotPassed?: ReactElement
}

/**
 * @description All theme names available in the library.
 * @type {"light"|"dark"}
 * @example
 * theme="light"
 * theme="dark"
 */
export type LibThemeNames = keyof typeof designTokens.libThemes

/**
 * @description All input variant tokens available in the library.
 * @type {"rounded" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-3xl" | "rounded-full" | "pill"}
 * @example
 * variant="rounded"
 * variant="rounded-lg"
 * variant="pill"
 */
export type LibInputVariant = keyof typeof designTokens.libInputVariants

/**
 * @description All input type tokens available in the library for form inputs.
 * @type {"color" | "date" | "datetime-local" | "month" | "week" | "file" | "password" | "search" | "email" | "number" | "tel" | "text" | "url" | "time" | "select" | "textarea"}
 * @example
 * type="email"
 * type="password"
 * type="select"
 */
export type LibInputType = keyof typeof designTokens.libInputTypes

/**
 * @description All loader variant tokens available in the library.
 * @type {1 | 2 | 3}
 * @example
 * variant={3}
 */
export type LibLoaderVariant = keyof typeof designTokens.libLoaderVariants

/**
 * @description All button variant tokens available in the library.
 * @type {"plain" | "ghost" | "transparent"}
 * @example
 * variant="plain"
 * variant="ghost"
 * variant="transparent"
 */
export type LibButtonVariant = keyof typeof designTokens.libButtonVariants

/**
 * @description All button variant tokens available in the library.
 * @type {"plain" | "ghost" | "outline" | "transparent"}
 * @example
 * variant="plain"
 * variant="ghost"
 * variant="outline"
 */
export type LibButtonVariantExtended =
	| keyof typeof designTokens.libButtonVariants
	| "outline"

/**
 * @description All button size tokens available in the library.
 * @type {"default" | "small"}
 * @example
 * variant="small"
 */
export type LibButtonSize = keyof typeof designTokens.libButtonSize

/**
 * @description All input background tokens available in the library.
 * @type {"light" | "dark"}
 * @example
 * inputBackground="light"
 * inputBackground="dark"
 */
export type LibInputBackground = keyof typeof designTokens.libInputBackgrounds

/**
 * @description All display text tag tokens available in the library (headings from 1 to 5).
 * @type {"h1" | "h2" | "h3" | "h4" | "h5"}
 * @example
 * tag="h1"
 * tag="h2"
 */
export type LibTextTagDisplay = keyof typeof designTokens.libTextDisplayTags

/**
 * @description All text tags without the display prop tokens available in the library (paragraphs, lists, etc.).
 * @type {"h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"}
 * @example
 * tag="p"
 * tag="ul"
 * tag="blockquote"
 */
export type LibTextTagNoDisplay = keyof typeof designTokens.libTextTags

/**
 * @description All text tag tokens available in the library (display and non-display).
 * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"}
 * @example
 * tag="h1"
 * tag="p"
 * tag="ul"
 */
export type LibTextTag = LibTextTagDisplay | LibTextTagNoDisplay

/**
 * @description All CSS position tokens available in the library.
 * @type {"relative" | "absolute" | "fixed"}
 * @example
 * position="relative"
 * position="absolute"
 * position="fixed"
 */
export type LibPosition = keyof typeof designTokens.libPosition

/**
 * @description All z-index tokens available in the library.
 * @type {"0" | "10" | "20" | "30" | "40" | "50" | "-0" | "-10" | "-20" | "-30" | "-40" | "-50"}
 * @example
 * zIndex="10"
 * zIndex="999"
 */
export type LibZIndex = keyof typeof designTokens.libZIndex

/**
 * @description All min heights available in the library
 * @type {"px" | "full" | "screen" | "dvh" | "dvw" | "lvh" | "lvw" | "svw" | "svh" | "auto" | "min" | "max" | "fit" | "lh"}
 * @example
 * minHeight="min-h-full"
 * minHeight="min-h-screen"
 */
export type LibMinHeight = keyof typeof designTokens.libMinHeights

/**
 * @description All key sizes for the Key component.
 * @type {"large" | "small"}
 * @example
 * keySize="large"
 * keySize="small"
 */
export type LibKeySize = keyof typeof designTokens.libKeySizes

/**
 * @description All max widths from the library.
 * @type {"3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "none" | "px" | "full" | "dvw" | "dvh" | "lvw" | "lvh" | "svw" | "svh" | "screen" | "min" | "max" | "fit"}
 * @example
 * maxWidth="md"
 * maxWidth="full"
 */
export type LibMaxWidth = keyof typeof designTokens.libMaxWidths

/**
 * @description All skeleton animation tokens available in the library.
 * @type {"pulse" | "shine"}
 * @example
 * skeletonAnimation="pulse"
 * skeletonAnimation="shine"
 */
export type LibSkeletonAnimation =
	keyof typeof designTokens.libSkeletonAnimations

/**
 * @description All tooltip position tokens available in the library.
 * @type {"top" | "bottom" | "left" | "right"}
 * @example
 * tooltipPosition="top"
 * tooltipPosition="right"
 */
export type LibTooltipPosition = keyof typeof designTokens.libTooltipPositions

/**
 * @description All tooltip trigger tokens available in the library.
 * @type {"hover" | "click"}
 * @example
 * tooltipTrigger="hover"
 * tooltipTrigger="click"
 */
export type LibTooltipTrigger = keyof typeof designTokens.libTooltipTriggers

/**
 * @description Props common to nearly all components.
 *
 * @template T - The HTML element type.
 * @prop {ElementType} [element] - The HTML element or React component to render as.
 * @prop {RefObject<T>} [ref] - Ref for the rendered element.
 * @extends HTMLAttributes<T>
 */
export interface LibComponentBase<T> extends HTMLAttributes<T> {
	element?: ElementType
	ref?: RefObject<T>
}

/**
 * @description All variants available for Accordion item.
 * @type {"basic" | "rounded"}
 * @example
 * variant="basic"
 * variant="rounded"
 */
export type LibAccordionVariant = keyof typeof designTokens.libAccordionVariant

/**
 * @description All icons available for Accordion item.
 * @type {"plus" | "chevron"}
 * @example
 * icon="plus"
 * icon="chevron"
 */
export type LibAccordionIcon = keyof typeof designTokens.libAccordionIcon

/**
 * @description Variants for Tag component.
 * @type {"plain" | "outline"}
 * @example
 * variant="plain"
 */
export type LibTagVariant = keyof typeof designTokens.libTagVariant

/**
 * @description Variants for Toast component.
 * @type {"success" | "error" | "warning" | "info" | "loading"}
 * @example
 * status="error"
 */
export type LibToastStatus = keyof typeof designTokens.libToastStatus

/**
 * @description Variants for InputCheck component.
 * @type {"tile" | "toggle" | "selector"}
 * @example
 * variant="toggle"
 */
export type LibCheckInputVariant =
	keyof typeof designTokens.libCheckInputVariants

/**
 * @description List direction variants for inputs with list.
 * @type {"up" | "down"}
 * @example
 * variant="up"
 */
export type LibInputListDirection =
	keyof typeof designTokens.libListInputDirections

/**
 * @description All tab justification tokens available in the library for positioning tabs within their container.
 * @type {"start" | "stretch"}
 * @example
 * justify="stretch"
 */
export type LibTabsJustify = keyof typeof designTokens.libTabsJustify

/**
 * @description All tab variant tokens available in the library for styling tab components.
 * @type {"basic" | "rounded"}
 * @example
 * variant="basic"
 */
export type LibTabsVariant = keyof typeof designTokens.libTabsVariant

/**
 * @description All slideshow pagination variant tokens available in the library for styling pagination controls.
 * @type {"dots" | "dots-outline" | "bars" | "thumbnails"}
 * @example
 * pagination="dots"
 * pagination="bars"
 * pagination="thumbnails"
 */
export type LibSlideshowPagination =
	keyof typeof designTokens.libSlideshowPagination

/**
 * @description All slideshow pagination position tokens available in the library for positioning pagination controls.
 * @type {"inside" | "outside"}
 * @example
 * paginationPosition="inside"
 * paginationPosition="outside"
 */
export type LibSlideshowPaginationPosition =
	keyof typeof designTokens.libSlideshowPaginationPosition

/**
 * @description All slideshow navigation buttons position tokens available in the library for positioning previous/next controls.
 * @type {"left" | "right"}
 * @example
 * buttonsPosition="left"
 * buttonsPosition="right"
 */
export type LibSlideshowButtonsPosition =
	keyof typeof designTokens.libSlideshowButtonsPositions

/**
 * @description All slideshow navigation buttons size tokens available in the library for sizing previous/next controls.
 * @type {"small" | "large"}
 * @example
 * buttonsSize="small"
 * buttonsSize="large"
 */
export type LibSlideshowButtonsSize =
	keyof typeof designTokens.libSlideshowButtonsSizes

/**
 * @description All table variant tokens available in the library for styling table components.
 * @type {"bordered" | "stripped" | "border-bottom"}
 * @example
 * variant="bordered"
 * variant="stripped"
 * variant="border-bottom"
 */
export type LibTableVariant = keyof typeof designTokens.libTableVariants

/**
 * @description All markdown editor view tokens available in the library for switching between different editor display modes.
 * @type {"code" | "live" | "preview"}
 * @example
 * view="code"
 * view="live"
 * view="preview"
 */
export type LibMdEditorViews = keyof typeof designTokens.libMdEditorViews

/**
 * @description All markdown editor title tokens available in the library for heading levels in the editor.
 * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
 * @example
 * titles={{
 *     h1: true,
 * 	   h3: false,
 * }}
 */
export type LibMdEditorTitles = keyof typeof designTokens.libMdEditorTitles

/**
 * @description All markdown editor button tokens available in the library for controlling toolbar button visibility.
 * @type {"bold" | "italic" | "strikethrough" | "underline" | "ul" | "ol" | "link" | "quote" | "hr" | "code" | "codeBlock" | "comment" | "image"}
 * @example
 * buttons={{
 *     bold: false,
 * 	   italic: true,
 * }}
 */
export type LibMdEditorButtons = keyof typeof designTokens.libMdEditorButtons

/**
 * @description All drawer position tokens available in the library for positioning drawer components within the viewport.
 * @type {"left" | "right" }
 * @example
 * position="left"
 * position="right"
 */
export type LibDrawerPosition = keyof typeof designTokens.libDrawerPositions

/**
 * @description All navigation burger position tokens available in the library for positioning burger menu buttons within the navigation.
 * @type {"left" | "right"}
 * @example
 * position="left"
 * position="right"
 */
export type LibNavBurgerPosition =
	keyof typeof designTokens.libNavBurgerPositions

/**
 * @description All navigation mobile variant tokens available in the library for styling mobile navigation components.
 * @type {"drawer" | "full" | "top"}
 * @example
 * variant="drawer"
 * variant="full"
 */
export type LibNavMobileVariant = keyof typeof designTokens.libNavMobileVariants

/**
 * @description All header position tokens available in the library for positioning header components within the viewport.
 * @type {"relative" | "absolute" | "fixed"}
 * @example
 * position="relative"
 * position="absolute"
 * position="fixed"
 */
export type LibHeaderPosition = Extract<
	Property.Position,
	"relative" | "absolute" | "fixed"
>

/**
 * @description All footer direction tokens available in the library for controlling the layout direction of footer content.
 * @type {"horizontal" | "vertical"}
 * @example
 * direction="horizontal"
 * direction="vertical"
 */
export type LibFooterDirection = keyof typeof designTokens.libFooterDirection

/**
 * @description All footer links separator tokens available in the library for controlling the visual separator between footer links.
 * @type {"dot" | "dash"}
 * @example
 * separator="dot"
 * separator="dash"
 */
export type LibFooterLinksSeparator =
	keyof typeof designTokens.libFooterLinksSeparator

/**
 * @description Type of values for InputPin component representing a collection of pin input values.
 * @type {object}
 * @example
 * values={{
 *   0: 1,
 *   1: 2,
 *   2: 3,
 *   3: 4
 * }}
 *
 * values={{
 *   0: "",
 *   1: 5,
 *   2: undefined,
 *   3: 9
 * }}
 *
 * @prop {number | "" | undefined} [index] - Value at each pin position, can be a number, empty string, or undefined.
 */
export type LibValueInputPin = { [n: number]: number | "" | undefined }

/**
 * @description Configuration object for translation data used in useTranslation hook for internationalization support.
 * @type {object}
 * @example
 * translateLang={{
 *   en: {
 *     "hello": "Hello",
 *     "welcome": "Welcome to our app",
 *     "button.save": "Save"
 *   },
 *   fr: {
 *     "hello": "Bonjour",
 *     "welcome": "Bienvenue dans notre application",
 *     "button.save": "Enregistrer"
 *   }
 * }}
 *
 * @prop {Object.<string, Object.<string, string>>} [language] - Language code as key containing translation key-value pairs.
 */
export type TranslateLang = {
	[language: string]: {
		[key: string]: string
	}
}

/**
 * @description Configuration object for background image styling and positioning properties.
 * @type {object}
 * @example
 * backgroundImage={{
 *   img: "/images/hero-bg.jpg",
 *   position: "center",
 *   size: "cover",
 *   repeat: "no-repeat"
 * }}
 *
 * backgroundImage={{
 *   img: "url('/pattern.png')",
 *   clip: "padding",
 *   origin: "border",
 *   repeat: "repeat-x"
 * }}
 *
 * @prop {string} img - URL or path to the background image.
 * @prop {"border" | "padding" | "content" | "text"} [clip] - Defines how far the background extends within the element.
 * @prop {"border" | "padding" | "content"} [origin] - Sets the origin position of the background image.
 * @prop {"top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right"} [position] - Position of the background image within the element.
 * @prop {"repeat" | "repeat-x" | "repeat-y" | "repeat-space" | "repeat-round" | "no-repeat"} [repeat] - How the background image should be repeated.
 * @prop {"auto" | "cover" | "contain"} [size] - Size of the background image.
 */
export interface ILibBackgroundImage {
	img: string
	clip?: "border" | "padding" | "content" | "text"
	origin?: "border" | "padding" | "content"
	position?:
		| "top-left"
		| "top"
		| "top-right"
		| "left"
		| "center"
		| "right"
		| "bottom-left"
		| "bottom"
		| "bottom-right"
	repeat?:
		| "repeat"
		| "repeat-x"
		| "repeat-y"
		| "repeat-space"
		| "repeat-round"
		| "no-repeat"
	size?: "auto" | "cover" | "contain"
}

/**
 * @description Configuration object for country data used in InputPhone component and other internationalization features.
 * @type {object}
 * @use Import `countries` object
 * @example
 * country={countries[2]}
 *
 * @prop {string} name - Full name of the country.
 * @prop {string} dial_code - International dialing code with + prefix.
 * @prop {CountryCode} code - ISO 3166-1 alpha-2 country code.
 * @prop {string} flag - Image flag for the country.
 */
export type LibCountry = {
	name: string
	dial_code: string
	code: CountryCode
	flag: ReactElement
}

/**
 * @description Configuration object for positioning the BackToTop component within the viewport.
 * @type {object}
 * @example
 * position={{
 *   right: "md",
 *   bottom: "lg",
 *   zIndex: "50"
 * }}
 *
 * position={{
 *   left: "sm",
 *   top: "unset",
 *   bottom: "xl"
 * }}
 *
 * @prop {LibSpacers | "unset"} [left] - Distance from the left edge of the viewport.
 * @prop {LibSpacers | "unset"} [top] - Distance from the top edge of the viewport.
 * @prop {LibSpacers | "unset"} [right] - Distance from the right edge of the viewport.
 * @prop {LibSpacers | "unset"} [bottom] - Distance from the bottom edge of the viewport.
 * @prop {LibZIndex} [zIndex] - Z-index value for layering the component above other elements.
 */
export interface LibBackToTopPosition {
	left?: LibSpacers | "unset"
	top?: LibSpacers | "unset"
	right?: LibSpacers | "unset"
	bottom?: LibSpacers | "unset"
	zIndex?: LibZIndex
}

/**
 * @description Configuration object for positioning and styling tooltip components with advanced customization options.
 * @type {object}
 * @example
 * tooltipOptions={{
 *   position: "top",
 *   offset: "md",
 *   backgroundColor: "black",
 *   textColor: "white",
 *   hideArrow: false
 * }}
 *
 * tooltipOptions={{
 *   position: "right",
 *   offset: "lg",
 *   backgroundColor: "primary-500",
 *   textColor: "white",
 *   hideArrow: true,
 *   className: "custom-tooltip"
 * }}
 *
 * @prop {LibTooltipPosition} [position] - Position of the tooltip relative to its trigger element.
 * @prop {LibSpacers} [offset] - Distance between the tooltip and its trigger element.
 * @prop {LibAllColorsAndOverlays} [backgroundColor] - Background color or overlay for the tooltip.
 * @prop {LibAllColors} [textColor] - Text color for the tooltip content.
 * @prop {boolean} [hideArrow] - Whether to hide the arrow pointing to the trigger element.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the tooltip.
 * @prop {CSSProperties} [style] - Custom inline styles for the tooltip.
 */
export interface LibTooltipPositionOptions {
	position?: LibTooltipPosition
	offset?: LibSpacers
	backgroundColor?: LibAllColorsAndOverlays
	textColor?: LibAllColors
	hideArrow?: boolean
	className?: ClassNames
	style?: CSSProperties
	tooltipClassName?: ClassNames
	tooltipStyle?: CSSProperties
}

export type ReactChildren = ReactNode | Array<ReactNode>
export type ReactElement = ReactEl
// eslint-disable-next-line
export type FC<T = {}> = FunctionComponent<T>
export type DispatchState<T> = Dispatch<SetStateAction<T>>
export type Classes = string | Array<string>

export type CssTextAlign =
	| "left"
	| "center"
	| "right"
	| "justify"
	| "start"
	| "end"
export type CssVerticalAlign =
	| "align-baseline"
	| "align-top"
	| "align-middle"
	| "align-bottom"
	| "align-text-top"
	| "align-text-bottom"
	| "align-sub"
	| "align-super"
export type CssJustifyItems =
	| "start"
	| "end"
	| "end-safe"
	| "center"
	| "center-safe"
	| "stretch"
	| "normal"
export type CssAlignItems =
	| "start"
	| "end"
	| "end-safe"
	| "center"
	| "center-safe"
	| "baseline"
	| "baseline-start"
	| "stretch"
export type CssJustifyContent =
	| "start"
	| "end"
	| "end-safe"
	| "center"
	| "center-safe"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "stretch"
	| "baseline"
	| "normal"
export type CssAlignContent =
	| "normal"
	| "center"
	| "start"
	| "end"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "baseline"
	| "stretch"
export type CssFlexDirection = "row" | "row-reverse" | "col" | "col-reverse"
export type CssFlexWrap = "nowrap" | "wrap" | "wrap-reverse"
export type CssObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down"
export type CssBorderStyle =
	| "solid"
	| "dashed"
	| "dotted"
	| "double"
	| "hidden"
	| "none"
export type CssOutlineStyle =
	| "solid"
	| "dashed"
	| "dotted"
	| "double"
	| "none"
	| "hidden"

export type LibMainSize = keyof typeof designTokens.libMainSizes
export type LibAsideSize = keyof typeof designTokens.libAsideSizes
export type CountryCode = keyof typeof designTokens.libCountryCodes
export type ClassNames = string | Array<string>
export type CSSProperties = CSS
