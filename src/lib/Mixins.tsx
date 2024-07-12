/*=============================================== Mixins ===============================================*/

import { css, type DefaultTheme } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
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
    type LibAllColors,
    type LibColorsShort,
    type LibColorsHover,
    type LibOverlays,
    type LibRadiusProps,
    type LibShadows,
    type LibBoxShadowProps,
    type LibSpacers,
    type LibPaddingProps,
    type LibTransitions,
    type LibRadiuses,
    type JustifyItems,
    type AlignItems,
    type JustifyContent,
    type AlignContent,
    type FlexDirection,
    type FlexWrap,
    type LibFontSizes,
    type LibFontWeights,
    type LibMarginProps,
    type LibBorderProps,
    type LibAllColorsAndOverlays,
    type LibOutlineProps,
    type LibColorsHoverAndCurrent,
    type BackgroundImageProps,
    type LibThemeNames,
    typeValues,
} from "./types"

type IconMixin = {
    $name: string
    $color?: LibAllColors
    $size?: number
    $isLibIcon?: boolean
}

function getColorMixinFromTheme(
    theme: DefaultTheme | null = COLORS_LIGHT,
    themeName?: LibThemeNames
) {
    const THEME: DefaultTheme = (
        theme === null && themeName
            ? themeName === "dark"
                ? COLORS_DARK
                : COLORS_LIGHT
            : theme === null
            ? COLORS_LIGHT
            : theme
    ) as DefaultTheme

    const colorsShortMap = new Map<LibColorsShort, keyof typeof THEME>([
        ["primary", theme!.PRIMARY_500],
        ["secondary", theme!.SECONDARY_500],
        ["success", theme!.SUCCESS_500],
        ["danger", theme!.DANGER_500],
        ["warning", theme!.WARNING_500],
        ["gray", theme!.GRAY_500],
        ["black", theme!.BLACK],
        ["white", theme!.WHITE],
    ])

    const allColorsMap = new Map<LibAllColors, keyof typeof THEME>([
        ...colorsShortMap,
        ["gray-50", theme!.GRAY_50],
        ["gray-100", theme!.GRAY_100],
        ["gray-200", theme!.GRAY_200],
        ["gray-300", theme!.GRAY_300],
        ["gray-400", theme!.GRAY_400],
        ["gray-500", theme!.GRAY_500],
        ["gray-600", theme!.GRAY_600],
        ["gray-700", theme!.GRAY_700],
        ["gray-800", theme!.GRAY_800],
        ["gray-900", theme!.GRAY_900],
        ["primary-50", theme!.PRIMARY_50],
        ["primary-100", theme!.PRIMARY_100],
        ["primary-200", theme!.PRIMARY_200],
        ["primary-300", theme!.PRIMARY_300],
        ["primary-400", theme!.PRIMARY_400],
        ["primary-500", theme!.PRIMARY_500],
        ["primary-600", theme!.PRIMARY_600],
        ["primary-700", theme!.PRIMARY_700],
        ["primary-800", theme!.PRIMARY_800],
        ["primary-900", theme!.PRIMARY_900],
        ["secondary-50", theme!.SECONDARY_50],
        ["secondary-100", theme!.SECONDARY_100],
        ["secondary-200", theme!.SECONDARY_200],
        ["secondary-300", theme!.SECONDARY_300],
        ["secondary-400", theme!.SECONDARY_400],
        ["secondary-500", theme!.SECONDARY_500],
        ["secondary-600", theme!.SECONDARY_600],
        ["secondary-700", theme!.SECONDARY_700],
        ["secondary-800", theme!.SECONDARY_800],
        ["secondary-900", theme!.SECONDARY_900],
        ["success-50", theme!.SUCCESS_50],
        ["success-100", theme!.SUCCESS_100],
        ["success-200", theme!.SUCCESS_200],
        ["success-300", theme!.SUCCESS_300],
        ["success-400", theme!.SUCCESS_400],
        ["success-500", theme!.SUCCESS_500],
        ["success-600", theme!.SUCCESS_600],
        ["success-700", theme!.SUCCESS_700],
        ["success-800", theme!.SUCCESS_800],
        ["success-900", theme!.SUCCESS_900],
        ["danger-50", theme!.DANGER_50],
        ["danger-100", theme!.DANGER_100],
        ["danger-200", theme!.DANGER_200],
        ["danger-300", theme!.DANGER_300],
        ["danger-400", theme!.DANGER_400],
        ["danger-500", theme!.DANGER_500],
        ["danger-600", theme!.DANGER_600],
        ["danger-700", theme!.DANGER_700],
        ["danger-800", theme!.DANGER_800],
        ["danger-900", theme!.DANGER_900],
        ["warning-50", theme!.WARNING_50],
        ["warning-100", theme!.WARNING_100],
        ["warning-200", theme!.WARNING_200],
        ["warning-300", theme!.WARNING_300],
        ["warning-400", theme!.WARNING_400],
        ["warning-500", theme!.WARNING_500],
        ["warning-600", theme!.WARNING_600],
        ["warning-700", theme!.WARNING_700],
        ["warning-800", theme!.WARNING_800],
        ["warning-900", theme!.WARNING_900],
        ["background", theme!.BACKGROUND],
        ["font", theme!.FONT],
        ["currentColor", theme!.CURRENT_COLOR],
        ["transparent", theme!.TRANSPARENT],
    ])

    const ColorsShort = ($color: LibColorsShort = "primary") =>
        colorsShortMap.get($color)

    const AllColors = ($color: LibAllColors) => {
        console.log({ theme })
        return allColorsMap.get($color)
    }

    const ColorsAndOverlays = ($color: LibAllColorsAndOverlays | undefined) => {
        if (!$color) return null as any

        const overlayColors = Object.keys(
            typeValues.overlays
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
            ["primary", theme!.PRIMARY_500],
            ["secondary", theme!.SECONDARY_500],
            ["success", theme!.SUCCESS_500],
            ["danger", theme!.DANGER_500],
            ["warning", theme!.WARNING_500],
            ["white", theme!.WHITE],
            ["gray", theme!.GRAY_500],
            ["font", theme!.LINK_FONT_DEFAULT],
            ["background", theme!.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    }

    const ColorsHoverHover = ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_300],
            ["secondary", theme!.SECONDARY_300],
            ["success", theme!.SUCCESS_300],
            ["danger", theme!.DANGER_300],
            ["warning", theme!.WARNING_300],
            ["white", theme!.GRAY_300],
            ["gray", theme!.GRAY_300],
            ["font", theme!.LINK_FONT_HOVER],
            ["background", theme!.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    }

    const ColorsHoverActive = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_600],
            ["secondary", theme!.SECONDARY_600],
            ["success", theme!.SUCCESS_600],
            ["danger", theme!.DANGER_600],
            ["warning", theme!.WARNING_600],
            ["white", theme!.GRAY_100],
            ["gray", theme!.GRAY_600],
            ["font", theme!.LINK_FONT_ACTIVE],
            ["background", theme!.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostDefault = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_50],
            ["secondary", theme!.SECONDARY_50],
            ["success", theme!.SUCCESS_50],
            ["danger", theme!.DANGER_50],
            ["warning", theme!.WARNING_50],
            ["white", theme!.GRAY_50],
            ["gray", theme!.GRAY_50],
            ["font", theme!.FONT_GHOST_DEFAULT],
            ["background", theme!.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostHover = ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_200],
            ["secondary", theme!.SECONDARY_200],
            ["success", theme!.SUCCESS_200],
            ["danger", theme!.DANGER_200],
            ["warning", theme!.WARNING_200],
            ["white", theme!.GRAY_200],
            ["gray", theme!.GRAY_200],
            ["font", theme!.FONT_GHOST_HOVER],
            ["background", theme!.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    }

    const ColorsGhostActive = (
        $color: LibColorsHoverAndCurrent = "primary"
    ) => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_100],
            ["secondary", theme!.SECONDARY_100],
            ["success", theme!.SUCCESS_100],
            ["danger", theme!.DANGER_100],
            ["warning", theme!.WARNING_100],
            ["white", theme!.GRAY_100],
            ["gray", theme!.GRAY_100],
            ["font", theme!.FONT_GHOST_ACTIVE],
            ["background", theme!.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    }

    const Colors50 = (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary"
    ) => {
        const colorsMap = new Map<LibColorsShort, keyof typeof THEME>([
            ["primary", theme!.PRIMARY_50],
            ["secondary", theme!.SECONDARY_50],
            ["success", theme!.SUCCESS_50],
            ["danger", theme!.DANGER_50],
            ["warning", theme!.WARNING_50],
            ["gray", theme!.GRAY_50],
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
     * Use only in apps without theme switch
     * @param $color
     * @param theme
     */
    AllColors = (
        $color: LibAllColors,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).AllColors($color)

    ColorsShort = (
        $color: LibColorsShort,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsShort($color)

    ColorsAndOverlays = (
        $color: LibAllColorsAndOverlays | undefined,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsAndOverlays($color)

    ColorsHoverDefault = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverDefault($color)

    ColorsHoverHover = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverHover($color)

    ColorsHoverActive = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsHoverActive($color)

    ColorsGhostDefault = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostDefault($color)

    ColorsGhostHover = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostHover($color)

    ColorsGhostActive = (
        $color: LibColorsHoverAndCurrent,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).ColorsGhostActive($color)

    Colors50 = (
        $color: Exclude<LibColorsShort, "black" | "white">,
        theme: DefaultTheme | null = COLORS_LIGHT,
        themeName?: LibThemeNames
    ) => getColorMixinFromTheme(theme, themeName).Colors50($color)

    Icon = ({
        $name,
        $color = "currentColor",
        $size = 16,
        $isLibIcon,
    }: IconMixin) => {
        const iconURL = $isLibIcon ? $name : `/icons/${$name}.svg`

        return css`
            content: "";
            background-color: ${({ theme }) => theme.AllColors($color)};
            -webkit-mask-image: url(${iconURL});
            -webkit-mask-size: cover;
            mask-image: url(${$isLibIcon ? $name : `/icons/${$name}.svg`});
            mask-size: cover;
            width: ${$size}px;
            height: ${$size}px;
            display: inline-block;
        `
    }

    Overlay = ($overlay: LibOverlays | undefined) => {
        if (!$overlay) return null

        return overlaysMap.get($overlay)
    }

    BorderRadius = ($borderRadius: LibRadiusProps | undefined) => {
        if (!$borderRadius) return null

        const radiusMap = new Map<LibRadiusProps, RADIUSES>([
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

    Transition = ($transition: LibTransitions | undefined) => {
        if (!$transition) return null

        const transitionsMap = new Map<LibTransitions, TRANSITIONS>([
            ["short", TRANSITIONS.SHORT],
            ["long", TRANSITIONS.LONG],
            ["bezier", TRANSITIONS.BEZIER],
        ])

        return transitionsMap.get($transition)
    }

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

    BoxShadow = ($shadow?: LibBoxShadowProps) => {
        if (!$shadow) return null

        if (typeof $shadow === "string")
            return css`
                box-shadow: ${Mixins.Shadow($shadow)};
            `

        return css`
            box-shadow: ${Mixins.Shadow($shadow.default)};

            &:hover {
                box-shadow: ${Mixins.Shadow($shadow.hover)};
            }

            &:active {
                box-shadow: ${Mixins.Shadow($shadow.active)};
            }
        `
    }

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

    FontWeight = ($fontWeight: LibFontWeights | undefined = "regular") => {
        if (!$fontWeight) return null

        const fontWeightsMap = new Map<LibFontWeights, FONT_WEIGHTS>([
            ["regular", FONT_WEIGHTS.REGULAR],
            ["bold", FONT_WEIGHTS.BOLD],
            ["black", FONT_WEIGHTS.BLACK],
        ])

        return fontWeightsMap.get($fontWeight)
    }

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

    HideScrollbar = css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `

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

    Padding = ($padding: LibPaddingProps | undefined) => {
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

    Margin = ($margin: LibMarginProps) => {
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
    }: {
        $inline?: boolean
        $col?: number | string
        $gap?: LibSpacers
        $columnGap?: LibSpacers
        $rowGap?: LibSpacers
        $justifyItems?: JustifyItems
        $alignItems?: AlignItems
        $justifyContent?: JustifyContent
        $alignContent?: AlignContent
    }) => css`
        display: ${$inline ? "inline-grid" : "grid"};
        grid-template-columns: ${$col && typeof $col === "number"
            ? `repeat(${$col} 1fr)`
            : $col};
        gap: ${$gap && Mixins.Spacer($gap)};
        column-gap: ${$columnGap && Mixins.Spacer($columnGap)};
        row-gap: ${$rowGap && Mixins.Spacer($rowGap)};
        justify-content: ${$justifyContent};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        align-content: ${$alignContent};
    `

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
    }: {
        $inline?: boolean
        $flexDirection?: FlexDirection
        $flexWrap?: FlexWrap
        $justifyContent?: JustifyContent
        $alignItems?: AlignItems
        $justifyItems?: JustifyItems
        $alignContent?: AlignContent
        $gap?: LibSpacers
        $columnGap?: LibSpacers
        $rowGap?: LibSpacers
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
    `

    Border = ($border?: LibBorderProps) => {
        if (!$border) return null

        const { style, width, color } = $border

        const defaultValues: LibBorderProps = {
            style: "solid",
            width: 1,
            color: "gray-200",
        }

        return css`
            border-style: ${style || defaultValues.style};
            border-width: ${Mixins.Spacer(width || defaultValues.width)};
            border-color: ${({ theme }) =>
                theme.AllColors(color || defaultValues.color)};
        `
    }

    Outline = ($outline?: LibOutlineProps) => {
        if (!$outline) return null

        const { style, width, color } = $outline

        const defaultValues: LibBorderProps = {
            style: "solid",
            width: 1,
            color: "white",
        }

        return css`
            outline-style: ${style || defaultValues.style};
            outline-width: ${Mixins.Spacer(width || defaultValues.width)};
            outline-color: ${({ theme }) =>
                theme.AllColors(color || defaultValues.color)};
        `
    }

    BackgroundImage = (props?: BackgroundImageProps) => {
        if (!props) return null

        const {
            img,
            clip,
            origin = "border-box",
            position = "center",
            repeat = "no-repeat",
            size = "cover",
        } = props

        return css`
            background-image: url(${img});
            background-origin: ${origin};
            background-position: ${position};
            background-repeat: ${repeat};
            background-size: ${size};

            ${clip &&
            (clip === "text"
                ? css`
                      background-clip: text;
                      -webkit-background-clip: text;
                      color: transparent;
                  `
                : css`
                      background-clip: ${clip};
                  `)}
        `
    }
}

export const Mixins = new mixins()
