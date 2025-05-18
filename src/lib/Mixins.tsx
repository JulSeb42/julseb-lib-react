import { css, type DefaultTheme } from "styled-components"
import type { Property } from "csstype"
import { stringifyPx } from "@julseb-lib/utils"
import { overlaysMap } from "./lib-utils"
import {
    COLORS_LIGHT,
    COLORS_DARK,
    RADIUSES,
    SHADOWS,
    SPACERS,
    TRANSITIONS,
    FONT_SIZES,
    FONT_WEIGHTS,
} from "./Variables"
import {
    designTokens,
    type LibAllColors,
    type LibColorsShort,
    type LibColorsHover,
    type LibOverlays,
    type ILibRadius,
    type LibShadows,
    type ILibBoxShadow,
    type LibSpacers,
    type ILibPadding,
    type LibTransitions,
    type LibRadiuses,
    type CssJustifyItems,
    type CssAlignItems,
    type CssJustifyContent,
    type CssAlignContent,
    type CssFlexDirection,
    type CssFlexWrap,
    type LibFontSizes,
    type LibFontWeights,
    type ILibMargin,
    type ILibBorder,
    type LibAllColorsAndOverlays,
    type ILibOutline,
    type LibColorsHoverAndCurrent,
    type LibThemeNames,
    type LibPositionExtract,
} from "./types"

type ILibIconMixin = {
    $name: string
    $color?: LibAllColors
    $size?: number
    $isLibIcon?: boolean
}

const getColorMixinFromTheme = (
    theme: DefaultTheme | null = COLORS_LIGHT,
    themeName?: LibThemeNames
) => {
    let THEME: DefaultTheme

    if (themeName) {
        THEME = (
            themeName === "dark" ? COLORS_DARK : COLORS_LIGHT
        ) as DefaultTheme
    } else if (theme === null) {
        THEME = COLORS_LIGHT
    } else {
        THEME = theme
    }

    const colorsShortMap = new Map<LibColorsShort, keyof typeof THEME>([
        ["primary", THEME.PRIMARY_500],
        ["secondary", THEME.SECONDARY_500],
        ["success", THEME.SUCCESS_500],
        ["danger", THEME.DANGER_500],
        ["warning", THEME.WARNING_500],
        ["gray", THEME.GRAY_500],
        ["black", THEME.BLACK],
        ["white", THEME.WHITE],
    ])

    const allColorsMap = new Map<LibAllColors, keyof typeof THEME>([
        ...colorsShortMap,
        ["gray-50", THEME.GRAY_50],
        ["gray-100", THEME.GRAY_100],
        ["gray-200", THEME.GRAY_200],
        ["gray-300", THEME.GRAY_300],
        ["gray-400", THEME.GRAY_400],
        ["gray-500", THEME.GRAY_500],
        ["gray-600", THEME.GRAY_600],
        ["gray-700", THEME.GRAY_700],
        ["gray-800", THEME.GRAY_800],
        ["gray-900", THEME.GRAY_900],
        ["primary-50", THEME.PRIMARY_50],
        ["primary-100", THEME.PRIMARY_100],
        ["primary-200", THEME.PRIMARY_200],
        ["primary-300", THEME.PRIMARY_300],
        ["primary-400", THEME.PRIMARY_400],
        ["primary-500", THEME.PRIMARY_500],
        ["primary-600", THEME.PRIMARY_600],
        ["primary-700", THEME.PRIMARY_700],
        ["primary-800", THEME.PRIMARY_800],
        ["primary-900", THEME.PRIMARY_900],
        ["secondary-50", THEME.SECONDARY_50],
        ["secondary-100", THEME.SECONDARY_100],
        ["secondary-200", THEME.SECONDARY_200],
        ["secondary-300", THEME.SECONDARY_300],
        ["secondary-400", THEME.SECONDARY_400],
        ["secondary-500", THEME.SECONDARY_500],
        ["secondary-600", THEME.SECONDARY_600],
        ["secondary-700", THEME.SECONDARY_700],
        ["secondary-800", THEME.SECONDARY_800],
        ["secondary-900", THEME.SECONDARY_900],
        ["success-50", THEME.SUCCESS_50],
        ["success-100", THEME.SUCCESS_100],
        ["success-200", THEME.SUCCESS_200],
        ["success-300", THEME.SUCCESS_300],
        ["success-400", THEME.SUCCESS_400],
        ["success-500", THEME.SUCCESS_500],
        ["success-600", THEME.SUCCESS_600],
        ["success-700", THEME.SUCCESS_700],
        ["success-800", THEME.SUCCESS_800],
        ["success-900", THEME.SUCCESS_900],
        ["danger-50", THEME.DANGER_50],
        ["danger-100", THEME.DANGER_100],
        ["danger-200", THEME.DANGER_200],
        ["danger-300", THEME.DANGER_300],
        ["danger-400", THEME.DANGER_400],
        ["danger-500", THEME.DANGER_500],
        ["danger-600", THEME.DANGER_600],
        ["danger-700", THEME.DANGER_700],
        ["danger-800", THEME.DANGER_800],
        ["danger-900", THEME.DANGER_900],
        ["warning-50", THEME.WARNING_50],
        ["warning-100", THEME.WARNING_100],
        ["warning-200", THEME.WARNING_200],
        ["warning-300", THEME.WARNING_300],
        ["warning-400", THEME.WARNING_400],
        ["warning-500", THEME.WARNING_500],
        ["warning-600", THEME.WARNING_600],
        ["warning-700", THEME.WARNING_700],
        ["warning-800", THEME.WARNING_800],
        ["warning-900", THEME.WARNING_900],
        ["background", THEME.BACKGROUND],
        ["font", THEME.FONT],
        ["currentColor", THEME.CURRENT_COLOR],
        ["transparent", THEME.TRANSPARENT],
    ])

    const ColorsShort = ($color: LibColorsShort = "primary") =>
        colorsShortMap.get($color)

    const AllColors = ($color: LibAllColors) => allColorsMap.get($color)

    const ColorsAndOverlays = ($color: LibAllColorsAndOverlays | undefined) => {
        if (!$color) return null as any

        const overlayColors = Object.keys(
            designTokens.overlays
        ) as Array<LibOverlays>

        if (overlayColors.find(c => c === $color)) {
            return Mixins.Overlay($color as LibOverlays)
        }

        return Mixins.AllColors($color as LibAllColors, theme, themeName)
    }

    const ColorsHoverDefault = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_500],
            ["secondary", THEME.SECONDARY_500],
            ["success", THEME.SUCCESS_500],
            ["danger", THEME.DANGER_500],
            ["warning", THEME.WARNING_500],
            ["white", THEME.WHITE],
            ["gray", THEME.GRAY_500],
            ["font", THEME.LINK_FONT_DEFAULT],
            ["background", THEME.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    }

    const ColorsHoverHover = ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_300],
            ["secondary", THEME.SECONDARY_300],
            ["success", THEME.SUCCESS_300],
            ["danger", THEME.DANGER_300],
            ["warning", THEME.WARNING_300],
            ["white", THEME.GRAY_300],
            ["gray", THEME.GRAY_300],
            ["font", THEME.LINK_FONT_HOVER],
            ["background", THEME.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    }

    const ColorsHoverActive = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_600],
            ["secondary", THEME.SECONDARY_600],
            ["success", THEME.SUCCESS_600],
            ["danger", THEME.DANGER_600],
            ["warning", THEME.WARNING_600],
            ["white", THEME.GRAY_100],
            ["gray", THEME.GRAY_600],
            ["font", THEME.LINK_FONT_ACTIVE],
            ["background", THEME.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostDefault = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_50],
            ["secondary", THEME.SECONDARY_50],
            ["success", THEME.SUCCESS_50],
            ["danger", THEME.DANGER_50],
            ["warning", THEME.WARNING_50],
            ["white", THEME.GRAY_50],
            ["gray", THEME.GRAY_50],
            ["font", THEME.FONT_GHOST_DEFAULT],
            ["background", THEME.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostHover = ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_200],
            ["secondary", THEME.SECONDARY_200],
            ["success", THEME.SUCCESS_200],
            ["danger", THEME.DANGER_200],
            ["warning", THEME.WARNING_200],
            ["white", THEME.GRAY_200],
            ["gray", THEME.GRAY_200],
            ["font", THEME.FONT_GHOST_HOVER],
            ["background", THEME.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostActive = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_100],
            ["secondary", THEME.SECONDARY_100],
            ["success", THEME.SUCCESS_100],
            ["danger", THEME.DANGER_100],
            ["warning", THEME.WARNING_100],
            ["white", THEME.GRAY_100],
            ["gray", THEME.GRAY_100],
            ["font", THEME.FONT_GHOST_ACTIVE],
            ["background", THEME.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    }

    const Colors50 = (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary"
    ) => {
        const colorsMap = new Map<LibColorsShort, keyof typeof THEME>([
            ["primary", THEME.PRIMARY_50],
            ["secondary", THEME.SECONDARY_50],
            ["success", THEME.SUCCESS_50],
            ["danger", THEME.DANGER_50],
            ["warning", THEME.WARNING_50],
            ["gray", THEME.GRAY_50],
        ])

        return colorsMap.get($color)
    }

    return {
        ColorsShort,
        AllColors,
        ColorsAndOverlays,
        ColorsHoverDefault,
        ColorsHoverHover,
        ColorsHoverActive,
        ColorsGhostDefault,
        ColorsGhostHover,
        ColorsGhostActive,
        Colors50,
    }
}

class mixins {
    /**
     * @description Returns any color from the library
     * @param $color: Any color from the library
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.AllColors("primary", theme)}
     */
    AllColors = (
        $color: LibAllColors,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).AllColors($color)

    /**
     * @description Returns a color by short name
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black" | "white"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsShort("secondary", theme)}
     */
    ColorsShort = (
        $color: LibColorsShort,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsShort($color)

    /**
     * @description Returns any color or overlay from the library
     * @param $color: Any color or overlay from the library
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsAndOverlays("gray-200", theme)}
     */
    ColorsAndOverlays = (
        $color: LibAllColorsAndOverlays | undefined,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsAndOverlays($color)

    /**
     * @description Returns a color for components changing on hover, default state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsHoverDefault("success", theme)}
     */
    ColorsHoverDefault = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverDefault($color)

    /**
     * @description Returns a color for components changing on hover, hover state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsHoverHover("success", theme)}
     */
    ColorsHoverHover = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverHover($color)

    /**
     * @description Returns a color for components changing on hover, active state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsHoverActive("success", theme)}
     */
    ColorsHoverActive = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverActive($color)

    /**
     * @description Returns a color for components changing on hover with ghost colors, default state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsGhostDefault("danger", theme)}
     */
    ColorsGhostDefault = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostDefault($color)

    /**
     * @description Returns a color for components changing on hover with ghost colors, hover state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsGhostHover("danger", theme)}
     */
    ColorsGhostHover = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostHover($color)

    /**
     * @description Returns a color for components changing on hover with ghost colors, active state
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color:  ${({ theme }) => Mixins.ColorsGhostActive("danger", theme)}
     */
    ColorsGhostActive = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostActive($color)

    /**
     * @description Returns one of the colors 50
     * @param $color: "primary" | "secondary" | "success" | "danger" | "warning" | "gray"
     * @param theme?: Default theme
     * @param themeName?: "light" | "dark"
     * @example background-color: ${({ theme }) => Mixins.Colors50("secondary", theme)}
     */
    Colors50 = (
        $color: Exclude<LibColorsShort, "black" | "white">,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).Colors50($color)

    /**
     * @description Returns an icon mixin component
     * @prop $name: string
     * @prop $color?: Any color from the library
     * @prop $size?: number
     */
    Icon = ({
        $name,
        $color = "currentColor",
        $size = 16,
        $isLibIcon,
    }: ILibIconMixin) => {
        const iconURL = $isLibIcon ? $name : `/icons/${$name}.svg`

        return css`
            content: "";
            background-color: ${({ theme }) => Mixins.AllColors($color, theme)};
            -webkit-mask-image: url(${iconURL});
            -webkit-mask-size: cover;
            mask-image: url(${$isLibIcon ? $name : `/icons/${$name}.svg`});
            mask-size: cover;
            width: ${$size}px;
            height: ${$size}px;
            display: inline-block;
        `
    }

    /**
     * @description Returns an overlay from the library
     * @param $overlay?: "black-50" | "black-80" | "white-50" | "white-80" | "gradient-black" | "gradient-white"
     */
    Overlay = ($overlay: LibOverlays | undefined) => {
        if (!$overlay) return null

        return overlaysMap.get($overlay)
    }

    /**
     * @description Returns a border radius with the radiuses from the library
     * @param $borderRadius: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
     */
    BorderRadius = ($borderRadius: ILibRadius | undefined) => {
        if (!$borderRadius) return null

        const radiusMap = new Map<ILibRadius, RADIUSES>([
            ["xxl", RADIUSES.XXL],
            ["xl", RADIUSES.XL],
            ["l", RADIUSES.L],
            ["m", RADIUSES.M],
            ["s", RADIUSES.S],
            ["xs", RADIUSES.XS],
            ["round", RADIUSES.ROUND],
            ["circle", RADIUSES.CIRCLE],
        ])

        const getRadius = ($radius: LibRadiuses) =>
            typeof $radius === "number"
                ? stringifyPx($radius)
                : radiusMap.get($radius)

        if (
            typeof $borderRadius === "number" ||
            typeof $borderRadius === "string"
        )
            return css`
                border-radius: ${getRadius($borderRadius)};
            `

        const { topLeft, topRight, bottomLeft, bottomRight } = $borderRadius

        return css`
            border-top-left-radius: ${topLeft && getRadius(topLeft)};
            border-top-right-radius: ${topRight && getRadius(topRight)};
            border-bottom-left-radius: ${bottomLeft && getRadius(bottomLeft)};
            border-bottom-right-radius: ${bottomRight &&
            getRadius(bottomRight)};
        `
    }

    /**
     * @description Returns a transition from the library
     * @param $transition: "short" | "long" | "bezier"
     */
    Transition = ($transition: LibTransitions | undefined) => {
        if (!$transition) return null

        const transitionsMap = new Map<LibTransitions, TRANSITIONS>([
            ["short", TRANSITIONS.SHORT],
            ["long", TRANSITIONS.LONG],
            ["bezier", TRANSITIONS.BEZIER],
        ])

        return transitionsMap.get($transition)
    }

    /**
     * @description Returns a shadow from the library
     * @param $shadow "xxl" | "xl" | "l" | "m" | "s" | "xs"
     */
    Shadow = ($shadow: LibShadows | undefined) => {
        if (!$shadow) return null

        const shadowMap = new Map<LibShadows, SHADOWS>([
            ["xxl", SHADOWS.XXL],
            ["xl", SHADOWS.XL],
            ["l", SHADOWS.L],
            ["m", SHADOWS.M],
            ["s", SHADOWS.S],
            ["xs", SHADOWS.XS],
        ])

        return shadowMap.get($shadow)
    }

    /**
     * @description Returns a box shadow
     * @param $boxShadow "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: LibShadows; hover: LibShadows; active: LibShadows }
     */
    BoxShadow = ($boxShadow?: ILibBoxShadow) => {
        if (!$boxShadow) return null

        if (typeof $boxShadow === "string")
            return css`
                box-shadow: ${Mixins.Shadow($boxShadow)};
            `

        return css`
            box-shadow: ${Mixins.Shadow($boxShadow.default)};

            &:hover {
                box-shadow: ${Mixins.Shadow($boxShadow.hover)};
            }

            &:active {
                box-shadow: ${Mixins.Shadow($boxShadow.active)};
            }
        `
    }

    /**
     * @description Returns a font size from the library
     * @param $fontSize "display-h1" | "display-h2" | "display-h3" | "display-h4" | "display-h5" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small" | "inherit" | number
     */
    FontSize = (
        $fontSize: LibFontSizes | "inherit" | number | undefined = "body"
    ) => {
        if (!$fontSize) return null

        if (typeof $fontSize === "number") return stringifyPx($fontSize)

        const fontSizesMap = new Map<
            LibFontSizes | "inherit",
            FONT_SIZES | "inherit"
        >([
            ["display-h1", FONT_SIZES.DISPLAY_H1],
            ["display-h2", FONT_SIZES.DISPLAY_H2],
            ["display-h3", FONT_SIZES.DISPLAY_H3],
            ["display-h4", FONT_SIZES.DISPLAY_H4],
            ["display-h5", FONT_SIZES.DISPLAY_H5],
            ["h1", FONT_SIZES.H1],
            ["h2", FONT_SIZES.H2],
            ["h3", FONT_SIZES.H3],
            ["h4", FONT_SIZES.H4],
            ["h5", FONT_SIZES.H5],
            ["h6", FONT_SIZES.H6],
            ["body", FONT_SIZES.BODY],
            ["small", FONT_SIZES.SMALL],
            ["inherit", "inherit"],
        ])

        return fontSizesMap.get($fontSize)
    }

    /**
     * @description Returns a font weight from the library
     * @param $fontWeight: "regular" | "bold" | "black"
     */
    FontWeight = ($fontWeight: LibFontWeights = "regular") => {
        if (!$fontWeight) return null

        const fontWeightsMap = new Map<LibFontWeights, FONT_WEIGHTS>([
            ["regular", FONT_WEIGHTS.REGULAR],
            ["bold", FONT_WEIGHTS.BOLD],
            ["black", FONT_WEIGHTS.BLACK],
        ])

        return fontWeightsMap.get($fontWeight)
    }

    /**
     * @description Returns a spacer from the library
     * @param $spacer: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "auto"
     */
    Spacer = ($spacer: LibSpacers | "auto" | undefined) => {
        if (!$spacer) return null

        if (typeof $spacer === "number") return stringifyPx($spacer)

        if ($spacer === "0px") return "0px"

        const spacersMap = new Map<LibSpacers | "auto", SPACERS | "auto">([
            ["xxl", SPACERS.XXL],
            ["xl", SPACERS.XL],
            ["l", SPACERS.L],
            ["m", SPACERS.M],
            ["s", SPACERS.S],
            ["xs", SPACERS.XS],
            ["xxs", SPACERS.XXS],
            ["auto", "auto"],
        ])

        return spacersMap.get($spacer)
    }

    /**
     * @description Shorthand to hide a scroolbar in CSS
     */
    HideScrollbar = css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `

    /**
     * @description Shorthand to stretch all the tags inside the Wrapper / Wain / Aside compoents
     */
    StretchTags = css`
        & > div,
        & > h1,
        & > h2,
        & > h3,
        & > h4,
        & > h5,
        & > h6,
        & > p,
        & > ul,
        & > ol,
        & > dl,
        & > section,
        & > input,
        & > article,
        & > hr,
        & > pre,
        & > table,
        & > header,
        & > footer,
        & > iframe,
        & > nav,
        & > noscript,
        & > picture,
        & > select,
        & > textarea,
        & > form {
            align-self: stretch;
        }
    `

    /**
     * @description Adds padding to element
     * @argument $padding: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
     */
    Padding = ($padding: ILibPadding | undefined) => {
        if (!$padding) return null

        if (typeof $padding === "string" || typeof $padding === "number")
            return css`
                padding: ${Mixins.Spacer($padding)};
            `

        return css`
            padding-left: ${($padding?.left || $padding?.leftRight) &&
            Mixins.Spacer($padding?.left || $padding?.leftRight)};
            padding-top: ${($padding?.top || $padding?.topBottom) &&
            Mixins.Spacer($padding?.top || $padding?.topBottom)};
            padding-right: ${($padding?.right || $padding?.leftRight) &&
            Mixins.Spacer($padding?.right || $padding?.leftRight)};
            padding-bottom: ${($padding?.bottom || $padding?.topBottom) &&
            Mixins.Spacer($padding?.bottom || $padding?.topBottom)};
        `
    }

    /**
     * @description Adds margins to element
     * @argument $margin: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
     */
    Margin = ($margin: ILibMargin) => {
        if (!$margin) return null

        if ($margin === "0 auto")
            return css`
                margin: 0 auto;
            `

        if (typeof $margin === "string" || typeof $margin === "number")
            return css`
                margin: ${Mixins.Spacer($margin)};
            `

        return css`
            margin-left: ${($margin?.left || $margin?.leftRight) &&
            Mixins.Spacer($margin?.left || $margin?.leftRight)};
            margin-top: ${($margin?.top || $margin?.topBottom) &&
            Mixins.Spacer($margin?.top || $margin?.topBottom)};
            margin-right: ${($margin?.right || $margin?.leftRight) &&
            Mixins.Spacer($margin?.right || $margin?.leftRight)};
            margin-bottom: ${($margin?.bottom || $margin?.topBottom) &&
            Mixins.Spacer($margin?.bottom || $margin?.topBottom)};
        `
    }

    /**
     * @description Mixin for components using CSS Grid
     * @prop $inline?: boolean
     * @prop $col?: number | string
     * @prop $gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $justifyItems?: CssJustifyItems
     * @prop $alignItems?: CssAlignItems
     * @prop $justifyContent?: CssJustifyContent
     * @prop $alignContent?: CssAlignContent
     */
    Grid = ({
        $inline,
        $col,
        $gap,
        $columnGap,
        $rowGap,
        $justifyItems,
        $alignItems,
        $justifyContent,
        $alignContent,
        $padding,
    }: {
        $inline?: boolean
        $col?: number | string
        $gap?: LibSpacers
        $columnGap?: LibSpacers
        $rowGap?: LibSpacers
        $justifyItems?: CssJustifyItems
        $alignItems?: CssAlignItems
        $justifyContent?: CssJustifyContent
        $alignContent?: CssAlignContent
        $padding?: ILibPadding
    }) => css`
        display: ${$inline ? "inline-grid" : "grid"};
        grid-template-columns: ${$col && typeof $col === "number"
            ? `repeat(${$col}, 1fr)`
            : $col};
        gap: ${$gap && Mixins.Spacer($gap)};
        column-gap: ${$columnGap && Mixins.Spacer($columnGap)};
        row-gap: ${$rowGap && Mixins.Spacer($rowGap)};
        justify-content: ${$justifyContent};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        align-content: ${$alignContent};
        ${Mixins.Padding($padding)}
    `

    /**
     * @description Mixin for components using CSS Flexbox
     * @prop $inline?: boolean
     * @prop $flexDirection?: CssFlexDirection
     * @prop $flexWrap?: CssFlexWrap
     * @prop $justifyContent?: CssJustifyContent
     * @prop $alignItems?: CssAlignItems
     * @prop $justifyItems?: CssJustifyItems
     * @prop $alignContent?: CssAlignContent
     * @prop $gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     */
    Flexbox = ({
        $inline,
        $flexDirection,
        $flexWrap,
        $justifyContent,
        $alignItems,
        $justifyItems,
        $alignContent,
        $gap,
        $columnGap,
        $rowGap,
        $padding,
    }: {
        $inline?: boolean
        $flexDirection?: CssFlexDirection
        $flexWrap?: CssFlexWrap
        $justifyContent?: CssJustifyContent
        $alignItems?: CssAlignItems
        $justifyItems?: CssJustifyItems
        $alignContent?: CssAlignContent
        $gap?: LibSpacers
        $columnGap?: LibSpacers
        $rowGap?: LibSpacers
        $padding?: ILibPadding
    }) => css`
        display: ${$inline ? "inline-flex" : "flex"};
        flex-direction: ${$flexDirection};
        flex-wrap: ${$flexWrap};
        justify-content: ${$justifyContent};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        align-content: ${$alignContent};
        gap: ${$gap && Mixins.Spacer($gap)};
        column-gap: ${$columnGap && Mixins.Spacer($columnGap)};
        row-gap: ${$rowGap && Mixins.Spacer($rowGap)};
        ${Mixins.Padding($padding)}
    `

    /**
     * @description Adds border to element
     * @prop style?: CssBorderStyle
     * @prop width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop color?: Any color from the library
     */
    Border = ($border?: ILibBorder) => {
        if (!$border) return null

        const { style, width, color } = $border

        const borderValues: ILibBorder = {
            style: style || "solid",
            width: width || 1,
            color: color || "gray-200",
        }

        return css`
            border-style: ${borderValues.style};
            border-width: ${Mixins.Spacer(borderValues.width)};
            border-color: ${({ theme }) =>
                Mixins.AllColors(borderValues.color as LibAllColors, theme)};
        `
    }

    /**
     * @description Adds outline to element
     * @prop style?: CssOutlineStyle
     * @prop width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop color?: Any color from the library
     */
    Outline = ($outline?: ILibOutline) => {
        if (!$outline) return null

        const { style, width, color } = $outline

        const outlineValues: ILibBorder = {
            style: style || "solid",
            width: width || 1,
            color: color || "white",
        }

        return css`
            outline-style: ${outlineValues.style};
            outline-width: ${Mixins.Spacer(outlineValues.width)};
            outline-color: ${({ theme }) =>
                Mixins.AllColors(outlineValues.color as LibAllColors, theme)};
        `
    }

    /**
     * @description Adds background-image to element
     * @prop img: string
     * @prop clip?: CssBackgroundClip
     * @prop origin?: CssBackgroundOrigin
     * @prop position?: CssBackgroundPosition
     * @prop repeat?: CssBackgroundRepeat
     * @prop size?: CssBackgroundSize
     */
    BackgroundImage = ({
        $img,
        $clip,
        $origin = "border-box",
        $position = "center",
        $repeat = "no-repeat",
        $size = "cover",
    }: {
        $img: string
        $clip?: Property.BackgroundClip
        $origin?: Property.BackgroundOrigin
        $position?: Property.BackgroundPosition
        $repeat?: Property.BackgroundRepeat
        $size?: Property.BackgroundSize
    }) => {
        if (!$img) return null

        return css`
            background-image: url(${$img});
            background-origin: ${$origin};
            background-position: ${$position};
            background-repeat: ${$repeat};
            background-size: ${$size};

            ${$clip &&
            ($clip === "text"
                ? css`
                      background-clip: text;
                      -webkit-background-clip: text;
                      color: transparent;
                  `
                : css`
                      background-clip: ${$clip};
                  `)}
        `
    }

    /**
     * @description Adds position to element
     * @prop $position?: "relative" | "absolute" | "fixed"
     * @prop $left?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $top?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $right?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     * @prop $bottom?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
     */
    Position = ({
        $position,
        $left,
        $top,
        $right,
        $bottom,
        $zIndex,
    }: {
        $position?: LibPositionExtract
        $left?: LibSpacers | "unset"
        $top?: LibSpacers | "unset"
        $right?: LibSpacers | "unset"
        $bottom?: LibSpacers | "unset"
        $zIndex?: number
    }) => css`
        position: ${$position};
        left: ${$left && $left !== "unset" && Mixins.Spacer($left)};
        top: ${$top && $top !== "unset" && Mixins.Spacer($top)};
        right: ${$right && $right !== "unset" && Mixins.Spacer($right)};
        bottom: ${$bottom && $bottom !== "unset" && Mixins.Spacer($bottom)};
        z-index: ${$zIndex};
    `
}

export const Mixins = new mixins()
