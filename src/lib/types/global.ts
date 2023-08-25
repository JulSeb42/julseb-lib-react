/*=============================================== Global types ===============================================*/

import type { Property } from "csstype"

import type { typeValues } from "./type-values"
import type { RequireAtLeastOne } from "./require-at-least-one"
import type { COLORS_LIGHT, COLORS_DARK } from "../Variables"

/*====================== Common types ======================*/

export type LibColors = keyof typeof typeValues.libColors
export type LibColorsShort = keyof typeof typeValues.colorsShort
export type LibAllColors = LibColors | LibColorsShort
export type LibColorsHover = keyof typeof typeValues.colorsHover
export type LibOverlays = keyof typeof typeValues.overlays
export type LibFontFamilies = keyof typeof typeValues.fontFamilies
export type LibFontSizes = keyof typeof typeValues.fontSizes
export type LibFontWeights = keyof typeof typeValues.fontWeights | number
export type LibLineHeights = keyof typeof typeValues.lineHeights | number
export type LibShadows = keyof typeof typeValues.shadows
export type LibSpacers = keyof typeof typeValues.spacers | number
export type LibRadiuses = keyof typeof typeValues.radiuses | number
export type LibTransitions = keyof typeof typeValues.transitions
export type LibValidation = keyof typeof typeValues.validation | undefined
export type LibThemeNames = keyof typeof typeValues.theme

/*====================== Common component props ======================*/

/* Box shadow */

export type LibBoxShadowProps =
    | LibShadows
    | {
          default: LibShadows
          hover: LibShadows
          active: LibShadows
      }

/* Border radius */

export type LibRadiusProps =
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

export type LibPaddingProps =
    | LibSpacers
    | {
          left?: LibSpacers | "auto"
          top?: LibSpacers | "auto"
          right?: LibSpacers | "auto"
          bottom?: LibSpacers | "auto"
          leftRight?: LibSpacers | "auto"
          topBottom?: LibSpacers | "auto"
      }

export type LibMarginProps =
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

export type LibBorderProps = {
    style?: BorderStyle
    width?: LibSpacers
    color?: LibAllColors
}

/* Links & buttons */

type LinkTo = { to?: string; href?: never }
type LinkHref = { to?: never; href?: string }

type ButtonLinkClick = {
    onClick?: () => void
    disabled?: boolean
    to?: never
    href?: never
}

type ButtonLinkTo = {
    onClick?: never
    disabled?: never
    to?: string
    href?: never
}

type ButtonLinkHref = {
    onClick?: never
    disabled?: never
    to?: never
    href?: string
}

export type Link = LinkTo | LinkHref
export type LinkRequired = RequireAtLeastOne<Link, "to" | "href">

export type LinkBlank = Link & { blank?: boolean }
export type LinkBlankRequired = LinkRequired & { blank?: boolean }

export type ButtonLink = ButtonLinkClick | ButtonLinkTo | ButtonLinkHref
export type ButtonLinkRequired = RequireAtLeastOne<
    ButtonLink,
    "onClick" | "to" | "href"
>

export type ButtonLinkBlank =
    | Exclude<ButtonLinkTo, "onClick" | "disabled">
    | Exclude<ButtonLinkHref, "onClick" | "disabled">
export type ButtonLinkBlankRequired = RequireAtLeastOne<
    ButtonLinkBlank,
    "to" | "href"
>

/*====================== Theme ======================*/

export interface ThemeType {
    BLACK: COLORS_LIGHT | COLORS_DARK
    WHITE: COLORS_LIGHT | COLORS_DARK
    GRAY_50: COLORS_LIGHT | COLORS_DARK
    GRAY_100: COLORS_LIGHT | COLORS_DARK
    GRAY_200: COLORS_LIGHT | COLORS_DARK
    GRAY_300: COLORS_LIGHT | COLORS_DARK
    GRAY_400: COLORS_LIGHT | COLORS_DARK
    GRAY_500: COLORS_LIGHT | COLORS_DARK
    GRAY_600: COLORS_LIGHT | COLORS_DARK
    GRAY_700: COLORS_LIGHT | COLORS_DARK
    GRAY_800: COLORS_LIGHT | COLORS_DARK
    GRAY_900: COLORS_LIGHT | COLORS_DARK
    PRIMARY_50: COLORS_LIGHT | COLORS_DARK
    PRIMARY_100: COLORS_LIGHT | COLORS_DARK
    PRIMARY_200: COLORS_LIGHT | COLORS_DARK
    PRIMARY_300: COLORS_LIGHT | COLORS_DARK
    PRIMARY_400: COLORS_LIGHT | COLORS_DARK
    PRIMARY_500: COLORS_LIGHT | COLORS_DARK
    PRIMARY_600: COLORS_LIGHT | COLORS_DARK
    PRIMARY_700: COLORS_LIGHT | COLORS_DARK
    PRIMARY_800: COLORS_LIGHT | COLORS_DARK
    PRIMARY_900: COLORS_LIGHT | COLORS_DARK
    SECONDARY_50: COLORS_LIGHT | COLORS_DARK
    SECONDARY_100: COLORS_LIGHT | COLORS_DARK
    SECONDARY_200: COLORS_LIGHT | COLORS_DARK
    SECONDARY_300: COLORS_LIGHT | COLORS_DARK
    SECONDARY_400: COLORS_LIGHT | COLORS_DARK
    SECONDARY_500: COLORS_LIGHT | COLORS_DARK
    SECONDARY_600: COLORS_LIGHT | COLORS_DARK
    SECONDARY_700: COLORS_LIGHT | COLORS_DARK
    SECONDARY_800: COLORS_LIGHT | COLORS_DARK
    SECONDARY_900: COLORS_LIGHT | COLORS_DARK
    SUCCESS_50: COLORS_LIGHT | COLORS_DARK
    SUCCESS_100: COLORS_LIGHT | COLORS_DARK
    SUCCESS_200: COLORS_LIGHT | COLORS_DARK
    SUCCESS_300: COLORS_LIGHT | COLORS_DARK
    SUCCESS_400: COLORS_LIGHT | COLORS_DARK
    SUCCESS_500: COLORS_LIGHT | COLORS_DARK
    SUCCESS_600: COLORS_LIGHT | COLORS_DARK
    SUCCESS_700: COLORS_LIGHT | COLORS_DARK
    SUCCESS_800: COLORS_LIGHT | COLORS_DARK
    SUCCESS_900: COLORS_LIGHT | COLORS_DARK
    DANGER_50: COLORS_LIGHT | COLORS_DARK
    DANGER_100: COLORS_LIGHT | COLORS_DARK
    DANGER_200: COLORS_LIGHT | COLORS_DARK
    DANGER_300: COLORS_LIGHT | COLORS_DARK
    DANGER_400: COLORS_LIGHT | COLORS_DARK
    DANGER_500: COLORS_LIGHT | COLORS_DARK
    DANGER_600: COLORS_LIGHT | COLORS_DARK
    DANGER_700: COLORS_LIGHT | COLORS_DARK
    DANGER_800: COLORS_LIGHT | COLORS_DARK
    DANGER_900: COLORS_LIGHT | COLORS_DARK
    WARNING_50: COLORS_LIGHT | COLORS_DARK
    WARNING_100: COLORS_LIGHT | COLORS_DARK
    WARNING_200: COLORS_LIGHT | COLORS_DARK
    WARNING_300: COLORS_LIGHT | COLORS_DARK
    WARNING_400: COLORS_LIGHT | COLORS_DARK
    WARNING_500: COLORS_LIGHT | COLORS_DARK
    WARNING_600: COLORS_LIGHT | COLORS_DARK
    WARNING_700: COLORS_LIGHT | COLORS_DARK
    WARNING_800: COLORS_LIGHT | COLORS_DARK
    WARNING_900: COLORS_LIGHT | COLORS_DARK
    BACKGROUND: COLORS_LIGHT | COLORS_DARK
    FONT: COLORS_LIGHT | COLORS_DARK
    CURRENT_COLOR: "currentColor"
    TRANSPARENT: "transparent"
    LINK_FONT_DEFAULT: COLORS_LIGHT | COLORS_DARK
    LINK_FONT_HOVER: COLORS_LIGHT | COLORS_DARK
    LINK_FONT_ACTIVE: COLORS_LIGHT | COLORS_DARK
    LINK_BACKGROUND_DEFAULT: COLORS_LIGHT | COLORS_DARK
    LINK_BACKGROUND_HOVER: COLORS_LIGHT | COLORS_DARK
    LINK_BACKGROUND_ACTIVE: COLORS_LIGHT | COLORS_DARK
    FONT_GHOST_DEFAULT: COLORS_LIGHT | COLORS_DARK
    FONT_GHOST_HOVER: COLORS_LIGHT | COLORS_DARK
    FONT_GHOST_ACTIVE: COLORS_LIGHT | COLORS_DARK
    BACKGROUND_GHOST_DEFAULT: COLORS_LIGHT | COLORS_DARK
    BACKGROUND_GHOST_HOVER: COLORS_LIGHT | COLORS_DARK
    BACKGROUND_GHOST_ACTIVE: COLORS_LIGHT | COLORS_DARK

    ColorsShort: ($color?: LibColorsShort) => void
    AllColors: ($color?: LibAllColors) => void
    ColorsHoverDefault: ($color?: LibColorsHover) => void
    ColorsHoverHover: ($color?: LibColorsHover) => void
    ColorsHoverActive: ($color?: LibColorsHover) => void
    ColorsGhostDefault: ($color?: LibColorsHover) => void
    ColorsGhostHover: ($color?: LibColorsHover) => void
    ColorsGhostActive: ($color?: LibColorsHover) => void
    Colors50: ($color?: Exclude<LibColorsShort, "black" | "white">) => void
}

export interface ThemeContextProps {
    theme: ThemeType
    selectedTheme: LibThemeNames | undefined
    toggleTheme: () => void
}

/*====================== CSS values ======================*/

export type TextAlign = Property.TextAlign
export type VerticalAlign = Property.VerticalAlign
export type TextDecoration = Property.TextDecoration
export type Position = Property.Position
export type JustifyItems = Property.JustifyItems
export type AlignItems = Property.AlignItems
export type JustifyContent = Property.JustifyContent
export type AlignContent = Property.AlignContent
export type FlexDirection = Property.FlexDirection
export type FlexWrap = Property.FlexWrap
export type ObjectFit = Property.ObjectFit
export type Cursor = Property.Cursor
export type BorderStyle = Property.BorderStyle
