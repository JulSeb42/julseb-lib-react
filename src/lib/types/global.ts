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
	ButtonHTMLAttributes,
} from "react"
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
 * @type {"thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"}
 * @example
 * fontWeight="regular"
 * fontWeight="bold"
 */
export type LibFontWeights = keyof typeof designTokens.libFontWeights

/**
 * @description All line height tokens available in the library.
 * @type {"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"}
 * @example
 * lineHeight="normal"
 * lineHeight="tight"
 */
export type LibLineHeights = keyof typeof designTokens.libLineHeights

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
 * @description All loader variant tokens available in the library.
 * @type {1 | 2 | 3}
 * @example
 * variant={3}
 */
export type LibLoaderVariant = keyof typeof designTokens.libLoaderVariants

/**
 * @description All button variant tokens available in the library.
 * @type {"plain" | "ghost" | "outline" | "transparent"}
 * @example
 * variant="plain"
 * variant="ghost"
 * variant="transparent"
 */
export type LibButtonVariant = keyof typeof designTokens.libButtonVariants

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
export type LibTextDisplay = keyof typeof designTokens.libTextDisplayTags

/**
 * @description All text tags without the display prop tokens available in the library (paragraphs, lists, etc.).
 * @type {"h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"}
 * @example
 * tag="p"
 * tag="ul"
 * tag="blockquote"
 */
export type LibTextNoDisplay = keyof typeof designTokens.libTextTags

/**
 * @description All text tag tokens available in the library (display and non-display).
 * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"}
 * @example
 * tag="h1"
 * tag="p"
 * tag="ul"
 */
export type LibText = LibTextDisplay | LibTextNoDisplay

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
 * @type {"0" | "10" | "20" | "30" | "40" | "50" | "-0" | "-10" | "-20" | "-30" | "-40" | "-50" | "997" | "998" | "999"}
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
 * @description Props for Button inside ButtonGroup.
 *
 * @extends HTMLButtonElement
 * @prop {JSX.Element} [content] - The content of the button
 * @prop {string} [id] - The id if the button.
 */
export type LibButtonGroupButtonItem = LibComponentBase<HTMLButtonElement> &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		id: string
		buttonContent: ReactChildren
		children?: never
	}

/**
 * @description Type of toggles for ButtonGroup.
 * @type {"single" | "multi"}
 * @example
 * toggleType="single"
 * toggleType="multi"
 */
export type LibButtonGroupToggle =
	keyof typeof designTokens.libButtonGroupToggle

/* useTranslation hook */

/**
 * @description Props for useTranslation hook
 */
export type TranslateLang = {
	[language: string]: {
		[key: string]: string
	}
}

/* BackgroundImage */

/**
 * @description Props for background images
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

/* Input phone */

/**
 * @description Props for countries used in InputPhone component
 */
export type LibCountry = {
	name: string
	dial_code: string
	code: CountryCode
	flag: string
}

/* BackToTop */

/**
 * @description Props for position for BackToTop component
 */
export interface LibBackToTopPosition {
	left?: LibSpacers | "unset"
	top?: LibSpacers | "unset"
	right?: LibSpacers | "unset"
	bottom?: LibSpacers | "unset"
	zIndex?: LibZIndex
}

export type ReactChildren = ReactNode | Array<ReactNode>
export type ReactElement = ReactEl
export type FC = FunctionComponent
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
	| "center-sage"
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
