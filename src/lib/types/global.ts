import type {
    HTMLAttributes,
    ElementType,
    ReactNode,
    Dispatch,
    SetStateAction,
    MouseEventHandler,
    Ref,
} from "react"
import type { Property } from "csstype"
import type { DefaultTheme } from "styled-components"
import type { designTokens } from "./design-tokens"
import type { RequireAtLeastOne } from "./require-at-least-one"

export type LibColors = keyof typeof designTokens.libColors
export type LibColorsShort = keyof typeof designTokens.colorsShort
export type LibAllColors = LibColors | LibColorsShort
export type LibColorsHover = keyof typeof designTokens.colorsHover
export type LibColorsHoverAndCurrent = LibColorsHover | "currentColor"
export type LibOverlays = keyof typeof designTokens.overlays
export type LibAllColorsAndOverlays =
    | keyof typeof designTokens.libColors
    | keyof typeof designTokens.colorsShort
    | keyof typeof designTokens.overlays
export type LibFontFamilies = keyof typeof designTokens.fontFamilies
export type LibFontSizes = keyof typeof designTokens.fontSizes
export type LibFontWeights = keyof typeof designTokens.fontWeights | number
export type LibLineHeights = keyof typeof designTokens.lineHeights | number
export type LibShadows = keyof typeof designTokens.shadows
export type LibSpacers = keyof typeof designTokens.spacers | number | "0px"
export type LibRadiuses = keyof typeof designTokens.radiuses | number
export type LibTransitions = keyof typeof designTokens.transitions
export type LibValidationStatus = boolean | undefined
export type LibThemeNames = keyof typeof designTokens.theme
export type LibIcon = string | JSX.Element
export type LibInputVariant = keyof typeof designTokens.inputVariants
export type LibInputBackground = keyof typeof designTokens.inputBackgrounds
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
    "data-testid"?: string
    as?: ElementType
    ref?: Ref<T>
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
    color?: LibAllColors
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
    color?: LibAllColors
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
    theme: DefaultTheme
    selectedTheme: LibThemeNames | undefined
    toggleTheme: () => void
}

export type ReactChildren = ReactNode | Array<ReactNode>
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

export type LibMainSize = keyof typeof designTokens.mainSizes | number
export type LibAsideSize = keyof typeof designTokens.asideSizes | number
export type LibAccordionVariant = keyof typeof designTokens.accordionVariants
export type LibAccordionIcon =
    | keyof typeof designTokens.accordionIcons
    | JSX.Element
export type LibAvatarBadgePosition =
    keyof typeof designTokens.avatarBadgePosition
export type LibBreadcrumbSeparator =
    | keyof typeof designTokens.breadcrumbSeparators
    | JSX.Element
export type LibButtonIconVariant = Extract<
    LibButtonVariant,
    "plain" | "transparent" | "ghost"
>
export type LibImageBackgroundOverlay = Exclude<
    LibAllColorsAndOverlays,
    "gradient-black" | "gradient-white"
>
export type LibInputType = keyof typeof designTokens.inputTypes
export type LibInputCheckVariant = keyof typeof designTokens.checkInputVariants
export type LibKeySize = keyof typeof designTokens.keySizes
export type LibLoaderVariant = keyof typeof designTokens.loaderVariants
export type LibSkeletonAnimation = keyof typeof designTokens.skeletonAnimations
export type LibStepperDirection = keyof typeof designTokens.stepperDirections
export type LibTextDisplayTag = keyof typeof designTokens.textDisplayTags
export type LibTextTag = keyof typeof designTokens.textTags
export type LibTextAllTag = LibTextDisplayTag | LibTextTag
export type LibTextIconTag = Exclude<
    LibTextAllTag,
    "strong" | "em" | "ul" | "ol" | "dl"
>
export type LibTooltipTrigger = keyof typeof designTokens.tooltipTriggers
export type LibTabVariant = keyof typeof designTokens.tabsVariants
export type LibTabJustify = keyof typeof designTokens.tabsJustify
export type LibSlideshowPagination =
    keyof typeof designTokens.slideshowPagination
export type LibSlideshowPaginationPosition =
    keyof typeof designTokens.slideshowPaginationPosition
export type LibSlideshowButtonPosition =
    keyof typeof designTokens.slideshowButtonsPositions
export type LibSlideshowButtonSize =
    keyof typeof designTokens.slideshowButtonsSizes
export type LibTableVariant = keyof typeof designTokens.tableVariants
export type LibMessageType = keyof typeof designTokens.messageType
export type LibMdEditorEditor = keyof typeof designTokens.markdownEditorEditor
export type LibMdEditorButton = keyof typeof designTokens.markdownEditorButtons
export type LibMdEditorTitle = keyof typeof designTokens.markdownEditorTitles
export type LibNavBurgerPosition = keyof typeof designTokens.navBurgerPositions
export type LibNavMobileVariant = keyof typeof designTokens.navMobileVariants
export type LibHeaderVariant = keyof typeof designTokens.headerVariants
export type LibHeaderPosition = LibPositionExtract
export type LibIconMenuDirection = keyof typeof designTokens.iconMenuDirections
export type LibIconMenuIcon = keyof typeof designTokens.iconMenuIcon
export type LibIconMenuPosition = LibPositionExtract
export type LibToastStatus = keyof typeof designTokens.toastStatus
export type LibToasterPosition = keyof typeof designTokens.toasterPositions
export type LibInputListDirection =
    keyof typeof designTokens.listInputDirections
export type LibButtonVariant = keyof typeof designTokens.buttonVariants
export type LibButtonSize = keyof typeof designTokens.buttonSizes
export type LibTooltipPosition = keyof typeof designTokens.tooltipPositions
export type CountryCode = keyof typeof designTokens.countryCodes
export type LibFooterDirection = keyof typeof designTokens.footerDirections
export type LibFooterLinksSeparator = keyof typeof designTokens.footerSeparators
export type LibInputPrefixAndSuffix = string | JSX.Element
export type LibButtonGroupToggleSelect =
    keyof typeof designTokens.buttonGroupToggleSelects
export type LibValueInputPin = { [n: number]: number | "" | undefined }
export type LibDrawerPosition = keyof typeof designTokens.drawerPositions
export type LibPageLayoutTemplate =
    keyof typeof designTokens.pageLayoutTemplates
export type LibTimepickerSteps = keyof typeof designTokens.timepickerSteps
export type LibTimepickerHours = keyof typeof designTokens.hours
export type LibTimepickerHalfTimes = keyof typeof designTokens.halfHours
export type LibTimepickerQuarterTimes = keyof typeof designTokens.quarterHours
export type LibTimepickerMinutes = keyof typeof designTokens.minutes
export type LibMessagingDateFormat =
    keyof typeof designTokens.messagingDateFormats
