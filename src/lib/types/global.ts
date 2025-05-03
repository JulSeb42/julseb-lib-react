import type {
	HTMLAttributes,
	ElementType,
	ReactNode,
	Dispatch,
	SetStateAction,
	MouseEventHandler,
	ReactElement,
	FunctionComponent,
} from "react"
import type { Property } from "csstype"
import type { designTokens } from "../utils/design-tokens"
import type { RequireAtLeastOne } from "./require-at-least-one"

export type LibColors = keyof typeof designTokens.libColors
export type LibColorsHover = keyof typeof designTokens.libColorsHover
export type LibColorsHoverAndCurrent = LibColorsHover | "current"
export type LibOverlays = keyof typeof designTokens.libOverlays
export type LibAllColorsAndOverlays =
	| keyof typeof designTokens.libColors
	| keyof typeof designTokens.libOverlays
export type LibFontFamilies = keyof typeof designTokens.libFontFamilies
export type LibFontSizes = keyof typeof designTokens.libFontSizes
export type LibFontWeights = keyof typeof designTokens.libFontWeights | number
export type LibLineHeights = keyof typeof designTokens.libLineHeights | number
export type LibShadows = keyof typeof designTokens.libShadows
export type LibSpacers = keyof typeof designTokens.libSpacers | number | "0px"
export type LibRadiuses = keyof typeof designTokens.libRadius | number
export type LibTransitions = keyof typeof designTokens.libTransitions
export type LibValidationStatus = boolean | undefined
export type LibThemeNames = keyof typeof designTokens.libThemes
export type LibIcon = string | ReactElement
export type LibInputVariant = keyof typeof designTokens.libInputVariants
export type LibInputBackground = keyof typeof designTokens.libInputBackgrounds
export type LibTextDisplay = keyof typeof designTokens.libTextDisplayTags
export type LibTextNoDisplay = keyof typeof designTokens.libTextTags
export type LibText = LibTextDisplay | LibTextNoDisplay
export type LibPositionExtract = Extract<
	Property.Position,
	"relative" | "absolute" | "fixed"
>

/* Component base */
/**
 * @description Props common to nearly all components
 * @prop data-testid?: string
 * @prop as?: ElementType
 */
export interface LibComponentBase<T> extends HTMLAttributes<T> {
	element?: ElementType
}

/* Box shadow */
/**
 * @description Props for components with box shadow
 * @type "xxl" | "xl" | "l" | "m" | "s" | "xs"
 * @type { default: "xxl" | "xl" | "l" | "m" | "s" | "xs"; hover: "xxl" | "xl" | "l" | "m" | "s" | "xs"; active: "xxl" | "xl" | "l" | "m" | "s" | "xs" }
 */
export type ILibBoxShadow =
	| LibShadows
	| {
			default: LibShadows
			hover: LibShadows
			active: LibShadows
	  }

/* Border radius */
/**
 * @description Props for components with border radius
 * @type "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number
 * @type { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 */
export type ILibRadius =
	| LibRadiuses
	| number
	| null
	| {
			topLeft?: LibRadiuses | number | null
			topRight?: LibRadiuses | number | null
			bottomLeft?: LibRadiuses | number | null
			bottomRight?: LibRadiuses | number | null
	  }

/* Padding */
/**
 * @description Props for components with paddings
 * @type "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @type { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export type ILibPadding =
	| LibSpacers
	| {
			left?: LibSpacers | "auto"
			top?: LibSpacers | "auto"
			right?: LibSpacers | "auto"
			bottom?: LibSpacers | "auto"
			leftRight?: LibSpacers | "auto"
			topBottom?: LibSpacers | "auto"
	  }

/* Margins */
/**
 * @description Props for components with margins
 * @type "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "auto" | "0 auto"
 * @type { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export type ILibMargin =
	| LibSpacers
	| undefined
	| "auto"
	| "0 auto"
	| {
			left?: LibSpacers | "auto"
			top?: LibSpacers | "auto"
			right?: LibSpacers | "auto"
			bottom?: LibSpacers | "auto"
			leftRight?: LibSpacers | "auto"
			topBottom?: LibSpacers | "auto"
	  }

/* Border */
/**
 * @description Props for components with borders
 * @prop style?: CssBorderStyle
 * @prop width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop color?: Any color from the library
 */
export type ILibBorder = {
	style?: CssBorderStyle
	width?: LibSpacers
	color?: LibColors
}

/* Outline */
/**
 * @description Props for components with outlines
 * @prop style?: CssOutlineStyle
 * @prop width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop color?: Any color from the library
 */
export type ILibOutline = {
	style?: CssOutlineStyle
	width?: LibSpacers
	color?: LibColors
}

/* Position */
/**
 * @description Props for components with CSS position
 * @prop position?: "relative" | "absolute" | "fixed"
 * @prop left?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop top?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop right?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop bottom?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 */
export interface ILibPosition {
	position?: LibPositionExtract
	left?: LibSpacers
	top?: LibSpacers
	right?: LibSpacers
	bottom?: LibSpacers
	zIndex?: number
}

/* Links & buttons */
type LinkTo = { to?: string; href?: never }
type LinkHref = { to?: never; href?: string }

/**
 * @description Props for links
 * @prop to?: string => only if href is not defined
 * @prop href?: string => only if to is not defined
 */
export type LibLink = LinkTo | LinkHref

/**
 * @description Props for links, to or href are required
 * @prop to?: string => only if href is not defined
 * @prop href?: string => only if to is not defined
 */
export type LibLinkRequired = RequireAtLeastOne<LibLink, "to" | "href">

/**
 * @description Props for links
 * @prop to?: string => only if href is not defined
 * @prop href?: string => only if to is not defined
 * @prop blank?: boolean
 */
export type LibLinkBlank = LibLink & { blank?: boolean }

/**
 * @description Props for links, to or href are required
 * @prop to?: string => only if href is not defined
 * @prop href?: string => only if to is not defined
 * @prop blank?: boolean
 */
export type LibLinkBlankRequired = LibLinkRequired & { blank?: boolean }

type LibButtonLinkClick = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	to?: never
	href?: never
}

type LibButtonLinkTo = {
	onClick?: never
	disabled?: never
	to?: string | "prev"
	href?: never
}

type LibButtonLinkHref = {
	onClick?: never
	disabled?: never
	to?: never
	href?: string
}

/**
 * @description Props for buttons and links
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 */
export type LibButtonLink =
	| LibButtonLinkClick
	| LibButtonLinkTo
	| LibButtonLinkHref

/**
 * @description Props for buttons and links, onClick, to or href are required
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 */
export type LibButtonLinkRequired = RequireAtLeastOne<
	LibButtonLink,
	"onClick" | "to" | "href"
>

/**
 * @description Props for buttons and links
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export type LibButtonLinkBlank =
	| (LibButtonLinkClick & { blank?: never })
	| (LibButtonLinkTo & { blank?: boolean })
	| (LibButtonLinkHref & { blank?: boolean })

/**
 * @description Props for buttons and links, onClick, to or href are required
 * @prop onClick: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to: string => only if onClick and href are not defined
 * @prop href: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export type LibButtonLinkBlankRequired = RequireAtLeastOne<
	LibButtonLinkBlank,
	"to" | "href" | "onClick"
>

/* useTranslation hook */
/**
 * @description Props for useTranslation hook
 * @prop [language: string]: { [key: string]: string }
 */
export type TranslateLang = {
	[language: string]: {
		[key: string]: string
	}
}

/* BackgroundImage */
/**
 * @description Props for background images
 * @prop img: string
 * @prop clip?: CssBackgroundClip
 * @prop origin?: CssBackgroundOrigin
 * @prop position?: CssBackgroundPosition
 * @prop repeat?: CssBackgroundRepeat
 * @prop size?: CssBackgroundSize
 */
export interface ILibBackgroundImage {
	img: string
	clip?: Property.BackgroundClip
	origin?: Property.BackgroundOrigin
	position?: Property.BackgroundPosition
	repeat?: Property.BackgroundRepeat
	size?: Property.BackgroundSize
}

/* Input phone */
/**
 * @description Props for countries used in InputPhone component
 * @prop name: string
 * @prop dial_code: string
 * @prop code: Any Alpha-2 Code from https://www.iban.com/country-codes
 * @prop flag: string
 */
export type LibCountry = {
	name: string
	dial_code: string
	code: CountryCode
	flag: string
}

/* BackToTop */
export interface LibBackToTopPosition {
	left?: LibSpacers | "unset"
	top?: LibSpacers | "unset"
	right?: LibSpacers | "unset"
	bottom?: LibSpacers | "unset"
	zIndex?: number
}

/**
 * @description Props for ThemeContext
 * @prop theme: DefaultTheme => import from "styled-components"
 * @prop selectedTheme: "light" | "dark" | undefined
 * @prop toggleTheme: () => void
 */
export interface ILibThemeContext {
	theme: LibThemeNames
	selectedTheme: LibThemeNames | undefined
	toggleTheme: () => void
}

export type ReactChildren = ReactNode | Array<ReactNode>
export type FC = FunctionComponent
export type DispatchState<T> = Dispatch<SetStateAction<T>>

export type CssTextAlign = Property.TextAlign
export type CssVerticalAlign = Property.VerticalAlign
export type CssTextDecoration = Property.TextDecoration
export type CssPosition = Property.Position
export type CssJustifyItems = Property.JustifyItems
export type CssAlignItems = Property.AlignItems
export type CssJustifyContent = Property.JustifyContent
export type CssAlignContent = Property.AlignContent
export type CssFlexDirection = Property.FlexDirection
export type CssFlexWrap = Property.FlexWrap
export type CssObjectFit = Property.ObjectFit
export type CssCursor = Property.Cursor
export type CssBorderStyle = Property.BorderStyle
export type CssOutlineStyle = Property.OutlineStyle
export type CssFontStyle = Property.FontStyle

export type LibMainSize = keyof typeof designTokens.libMainSizes | number
export type LibAsideSize = keyof typeof designTokens.libAsideSizes | number
export type CountryCode = keyof typeof designTokens.libCountryCodes
