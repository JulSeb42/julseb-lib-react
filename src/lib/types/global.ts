import type {
	HTMLAttributes,
	ElementType,
	ReactNode,
	Dispatch,
	SetStateAction,
	MouseEventHandler,
	ReactElement,
	FunctionComponent,
	RefObject,
} from "react"
import type { Property } from "csstype"
import type { designTokens } from "../utils/design-tokens"
import type { RequireAtLeastOne } from "./require-at-least-one"

/**
 * @description All color tokens available in the design system.
 * @type {keyof typeof designTokens.libColors}
 * @example
 * // Usage
 * color="primary"
 * color="gray-100"
 */
export type LibColors = keyof typeof designTokens.libColors
/**
 * @description All hover color tokens available in the design system.
 * @type {keyof typeof designTokens.libColorsHover}
 * @example
 * // Usage
 * color="primary-hover"
 * color="gray-100-hover"
 */
export type LibColorsHover = keyof typeof designTokens.libColorsHover
/**
 * @description All hover color tokens plus "current" for currentColor support.
 * @type {LibColorsHover | "current"}
 * @example
 * // Usage
 * color="primary-hover"
 * color="gray-100-hover"
 * color="current"
 */
export type LibColorsHoverAndCurrent = LibColorsHover | "current"
/**
 * @description All overlay tokens available in the design system.
 * @type {keyof typeof designTokens.libOverlays}
 * @example
 * // Usage
 * overlay="overlay-100"
 * overlay="overlay-dark"
 */
export type LibOverlays = keyof typeof designTokens.libOverlays
/**
 * @description All color and overlay tokens available in the design system.
 * @type {keyof typeof designTokens.libColors | keyof typeof designTokens.libOverlays}
 * @example
 * // Usage
 * color="primary"
 * color="gray-100"
 * overlay="overlay-100"
 * overlay="overlay-dark"
 */
export type LibAllColorsAndOverlays =
	| keyof typeof designTokens.libColors
	| keyof typeof designTokens.libOverlays
/**
 * @description All font family tokens available in the design system.
 * @type {keyof typeof designTokens.libFontFamilies}
 * @example
 * // Usage
 * fontFamily="body"
 * fontFamily="code"
 */
export type LibFontFamilies = keyof typeof designTokens.libFontFamilies
/**
 * @description All font size tokens available in the design system.
 * @type {keyof typeof designTokens.libFontSizes}
 * @example
 * // Usage
 * fontSize="md"
 * fontSize="xl"
 */
export type LibFontSizes = keyof typeof designTokens.libFontSizes
/**
 * @description All font weight tokens available in the design system.
 * @type {keyof typeof designTokens.libFontWeights}
 * @example
 * // Usage
 * fontWeight="regular"
 * fontWeight="bold"
 */
export type LibFontWeights = keyof typeof designTokens.libFontWeights
/**
 * @description All line height tokens available in the design system.
 * @type {keyof typeof designTokens.libLineHeights}
 * @example
 * // Usage
 * lineHeight="normal"
 * lineHeight="tight"
 */
export type LibLineHeights = keyof typeof designTokens.libLineHeights
/**
 * @description All box shadow tokens available in the design system.
 * @type {keyof typeof designTokens.libShadows}
 * @example
 * // Usage
 * boxShadow="md"
 * boxShadow="xl"
 */
export type LibShadows = keyof typeof designTokens.libShadows
/**
 * @description All spacer tokens available in the design system, plus "0px".
 * @type {keyof typeof designTokens.libSpacers | "0px"}
 * @example
 * // Usage
 * padding="md"
 * margin="xl"
 * gap="xs"
 * padding="0px"
 */
export type LibSpacers = keyof typeof designTokens.libSpacers | "0px"
/**
 * @description All border radius tokens available in the design system.
 * @type {keyof typeof designTokens.libRadius}
 * @example
 * // Usage
 * radius="m"
 * radius="xl"
 */
export type LibRadiuses = keyof typeof designTokens.libRadius
/**
 * @description All transition tokens available in the design system.
 * @type {keyof typeof designTokens.libTransitions}
 * @example
 * // Usage
 * transition="fast"
 * transition="slow"
 */
export type LibTransitions = keyof typeof designTokens.libTransitions
/**
 * @description Validation status for form components.
 * @type {boolean | undefined}
 * @example
 * // Usage
 * validation={true}   // valid
 * validation={false}  // invalid
 * validation={undefined} // not validated
 */
export type LibValidationStatus = boolean | undefined
/**
 * @description All theme names available in the design system.
 * @type {keyof typeof designTokens.libThemes}
 * @example
 * // Usage
 * theme="light"
 * theme="dark"
 */
export type LibThemeNames = keyof typeof designTokens.libThemes
/**
 * @description All input variant tokens available in the design system.
 * @type {keyof typeof designTokens.libInputVariants}
 * @example
 * // Usage
 * variant="rounded"
 * variant="rounded-lg"
 * variant="pill"
 */
export type LibInputVariant = keyof typeof designTokens.libInputVariants
/**
 * @description All input background tokens available in the design system.
 * @type {keyof typeof designTokens.libInputBackgrounds}
 * @example
 * // Usage
 * inputBackground="light"
 * inputBackground="dark"
 */
export type LibInputBackground = keyof typeof designTokens.libInputBackgrounds
/**
 * @description All display text tag tokens available in the design system (headings from 1 to 5).
 * @type {keyof typeof designTokens.libTextDisplayTags}
 * @example
 * // Usage
 * tag="h1"
 * tag="h2"
 */
export type LibTextDisplay = keyof typeof designTokens.libTextDisplayTags
/**
 * @description All text tags without the display prop tokens available in the design system (paragraphs, lists, etc.).
 * @type {keyof typeof designTokens.libTextTags}
 * @example
 * // Usage
 * tag="p"
 * tag="ul"
 * tag="blockquote"
 */
export type LibTextNoDisplay = keyof typeof designTokens.libTextTags
/**
 * @description All text tag tokens available in the design system (display and non-display).
 * @type {LibTextDisplay | LibTextNoDisplay}
 * @example
 * // Usage
 * tag="h1"
 * tag="p"
 * tag="ul"
 */
export type LibText = LibTextDisplay | LibTextNoDisplay
/**
 * @description All CSS position tokens available in the design system.
 * @type {keyof typeof designTokens.libPosition}
 * @example
 * // Usage
 * position="relative"
 * position="absolute"
 * position="fixed"
 */
export type LibPosition = keyof typeof designTokens.libPosition
/**
 * @description All z-index tokens available in the design system.
 * @type {keyof typeof designTokens.libZIndex}
 * @example
 * // Usage
 * zIndex="10"
 * zIndex="999"
 */
export type LibZIndex = keyof typeof designTokens.libZIndex

/**
 * @description Props common to nearly all components.
 *
 * @template T - The HTML element type.
 * @prop {ElementType} [element] - The HTML element or React component to render as.
 * @prop {RefObject<T>} [ref] - Ref for the rendered element.
 * @prop {string} [data-testid] - Test id for testing utilities.
 * @extends HTMLAttributes<T>
 */
export interface LibComponentBase<T> extends HTMLAttributes<T> {
	element?: ElementType
	ref?: RefObject<T>
}

/**
 * @description Props for components with box shadow.
 * Can be a single shadow token or an object specifying different shadows for default, hover, and active states.
 * @type {LibShadows | { default: LibShadows; hover: LibShadows; active: LibShadows }}
 * @example
 * // Single shadow
 * boxShadow="md"
 *
 * // Different shadows for states
 * boxShadow={{ default: "md", hover: "lg", active: "sm" }}
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
 * @description Props for components with border radius.
 * Can be a single radius token, null, or an object specifying different radii for each corner.
 * @type {"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | null | { topLeft?: LibRadiuses | null; topRight?: LibRadiuses | null; bottomLeft?: LibRadiuses | null; bottomRight?: LibRadiuses | null }}
 * @example
 * // Single radius
 * radius="md"
 *
 * // Different radii for corners
 * radius={{ topLeft: "sm", bottomRight: "xl" }}
 */
export type ILibRadius =
	| LibRadiuses
	| null
	| {
			topLeft?: LibRadiuses | null
			topRight?: LibRadiuses | null
			bottomLeft?: LibRadiuses | null
			bottomRight?: LibRadiuses | null
	  }

/* Padding */
/**
 * @description Props for components with paddings.
 * Can be a single spacer token from the design system or an object specifying paddings for each side or axis.
 * @type {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }}
 * @example
 * // Single padding
 * padding="md"
 *
 * // Different paddings for sides
 * padding={{ left: "lg", top: "2xl" }}
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
 * @description Props for components with margins.
 * Can be a single spacer token, "auto", "0 auto", or an object specifying margins for each side or axis.
 * @type {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "0px" | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" } | undefined}
 * @example
 * // Single margin
 * margin="md"
 *
 * // Centered margin
 * margin="0 auto"
 *
 * // Different margins for sides
 * margin={{ left: "lg", top: "2xl" }}
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
 * @description Props for components with borders.
 * @prop style - Border style (e.g., "border-solid", "border-dashed", "border-dotted", "border-double", "border-hidden", "border-none")
 * @prop width - Border width token ("2xs", "xs", "sm", "md", "lg", "xl", "2xl")
 * @prop color - Any color from the library
 * @example
 * // Solid border, medium width, primary color
 * border={{ style: "border-solid", width: "md", color: "primary" }}
 */
export type ILibBorder = {
	style?: CssBorderStyle
	width?: Exclude<LibSpacers, "0px">
	color?: LibColors
}

/* Outline */
/**
 * @description Props for components with outlines.
 * @prop style - Outline style (e.g., "outline-solid", "outline-dashed", "outline-dotted", "outline-double", "outline-none", "outline-hidden")
 * @prop width - Outline width token ("2xs", "xs", "sm", "md", "lg", "xl", "2xl")
 * @prop color - Any color from the library
 * @example
 * // Solid outline, medium width, primary color
 * outline={{ style: "outline-solid", width: "md", color: "primary" }}
 */
export type ILibOutline = {
	style?: CssOutlineStyle
	width?: Exclude<LibSpacers, "0px">
	color?: LibColors
}

/* Position */
/**
 * @description Props for components with CSS position and z-index.
 * @prop position - CSS position value (e.g., "relative", "absolute", "fixed").
 * @prop left - Left offset using a spacer token.
 * @prop top - Top offset using a spacer token.
 * @prop right - Right offset using a spacer token.
 * @prop bottom - Bottom offset using a spacer token.
 * @prop zIndex - z-index value from the design system.
 * @example
 * // Example usage
 * position={{ position: "absolute", top: "md", left: "lg", zIndex: "999" }}
 */
export interface ILibPosition {
	position?: LibPosition
	left?: LibSpacers
	top?: LibSpacers
	right?: LibSpacers
	bottom?: LibSpacers
	zIndex?: LibZIndex
}

/* Links & buttons */
type LinkTo = { to?: string; href?: never }
type LinkHref = { to?: never; href?: string }

/**
 * @description Props for links
 */
export type LibLink = LinkTo | LinkHref

/**
 * @description Props for links, to or href are required
 */
export type LibLinkRequired = RequireAtLeastOne<LibLink, "to" | "href">

/**
 * @description Props for links
 */
export type LibLinkBlank = LibLink & { blank?: boolean }

/**
 * @description Props for links, to or href are required
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
 */
export type LibButtonLink =
	| LibButtonLinkClick
	| LibButtonLinkTo
	| LibButtonLinkHref

/**
 * @description Props for buttons and links, onClick, to or href are required
 */
export type LibButtonLinkRequired = RequireAtLeastOne<
	LibButtonLink,
	"onClick" | "to" | "href"
>

/**
 * @description Props for buttons and links
 */
export type LibButtonLinkBlank =
	| (LibButtonLinkClick & { blank?: never })
	| (LibButtonLinkTo & { blank?: boolean })
	| (LibButtonLinkHref & { blank?: boolean })

/**
 * @description Props for buttons and links, onClick, to or href are required
 */
export type LibButtonLinkBlankRequired = RequireAtLeastOne<
	LibButtonLinkBlank,
	"to" | "href" | "onClick"
>

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
export type FC = FunctionComponent
export type DispatchState<T> = Dispatch<SetStateAction<T>>

export type CssTextAlign = Property.TextAlign
export type CssVerticalAlign = Property.VerticalAlign
export type CssTextDecoration = Property.TextDecoration
export type CssPosition = Property.Position
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
	| "stretch"
export type CssFlexDirection = Property.FlexDirection
export type CssFlexWrap = Property.FlexWrap
export type CssObjectFit = Property.ObjectFit
export type CssCursor = Property.Cursor
export type CssBorderStyle =
	| "border-solid"
	| "border-dashed"
	| "border-dotted"
	| "border-double"
	| "border-hidden"
	| "border-none"
export type CssOutlineStyle =
	| "outline-solid"
	| "outline-dashed"
	| "outline-dotted"
	| "outline-double"
	| "outline-none"
	| "outline-hidden"
export type CssFontStyle = Property.FontStyle

export type LibMainSize = keyof typeof designTokens.libMainSizes
export type LibAsideSize = keyof typeof designTokens.libAsideSizes
export type CountryCode = keyof typeof designTokens.libCountryCodes
