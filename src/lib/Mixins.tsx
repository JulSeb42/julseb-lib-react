/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"

import {
    stringifyPx,
    colorsLightShortMap,
    allColorsLightMap,
    colorsDarkShortMap,
    allColorsDarkMap,
} from "./utils"
import {
    COLORS_LIGHT,
    COLORS_DARK,
    OVERLAYS,
    RADIUSES,
    SHADOWS,
    SPACERS,
    TRANSITIONS,
    FONT_SIZES,
    FONT_WEIGHTS,
} from "./Variables"

import type {
    LibAllColors,
    LibColorsShort,
    LibColorsHover,
    LibOverlays,
    LibRadiusProps,
    LibShadows,
    LibBoxShadowProps,
    LibSpacers,
    LibPaddingProps,
    LibTransitions,
    LibRadiuses,
    JustifyItems,
    AlignItems,
    JustifyContent,
    AlignContent,
    FlexDirection,
    FlexWrap,
    LibFontSizes,
    LibFontWeights,
} from "./types"

type IconMixin = {
    $name: string
    $color?: LibAllColors
    $size?: number
    $isLibIcon?: boolean
}

export const ThemeLight = {
    ...COLORS_LIGHT,

    ColorsShort: ($color: LibColorsShort = "primary") =>
        colorsLightShortMap.get($color),

    AllColors: ($color: LibAllColors = "primary") =>
        allColorsLightMap.get($color),

    ColorsHoverDefault: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_500],
            ["secondary", COLORS_LIGHT.SECONDARY_500],
            ["success", COLORS_LIGHT.SUCCESS_500],
            ["danger", COLORS_LIGHT.DANGER_500],
            ["warning", COLORS_LIGHT.WARNING_500],
            ["white", COLORS_LIGHT.WHITE],
            ["font", COLORS_LIGHT.LINK_FONT_DEFAULT],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverHover: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_300],
            ["secondary", COLORS_LIGHT.SECONDARY_300],
            ["success", COLORS_LIGHT.SUCCESS_300],
            ["danger", COLORS_LIGHT.DANGER_300],
            ["warning", COLORS_LIGHT.WARNING_300],
            ["white", COLORS_LIGHT.GRAY_300],
            ["font", COLORS_LIGHT.LINK_FONT_HOVER],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverActive: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_600],
            ["secondary", COLORS_LIGHT.SECONDARY_600],
            ["success", COLORS_LIGHT.SUCCESS_600],
            ["danger", COLORS_LIGHT.DANGER_600],
            ["warning", COLORS_LIGHT.WARNING_600],
            ["white", COLORS_LIGHT.GRAY_100],
            ["font", COLORS_LIGHT.LINK_FONT_ACTIVE],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostDefault: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_50],
            ["secondary", COLORS_LIGHT.SECONDARY_50],
            ["success", COLORS_LIGHT.SUCCESS_50],
            ["danger", COLORS_LIGHT.DANGER_50],
            ["warning", COLORS_LIGHT.WARNING_50],
            ["white", COLORS_LIGHT.GRAY_50],
            ["font", COLORS_LIGHT.FONT_GHOST_DEFAULT],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostHover: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_200],
            ["secondary", COLORS_LIGHT.SECONDARY_200],
            ["success", COLORS_LIGHT.SUCCESS_200],
            ["danger", COLORS_LIGHT.DANGER_200],
            ["warning", COLORS_LIGHT.WARNING_200],
            ["white", COLORS_LIGHT.GRAY_200],
            ["font", COLORS_LIGHT.FONT_GHOST_HOVER],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostActive: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_100],
            ["secondary", COLORS_LIGHT.SECONDARY_100],
            ["success", COLORS_LIGHT.SUCCESS_100],
            ["danger", COLORS_LIGHT.DANGER_100],
            ["warning", COLORS_LIGHT.WARNING_100],
            ["white", COLORS_LIGHT.GRAY_100],
            ["font", COLORS_LIGHT.FONT_GHOST_ACTIVE],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    Colors50: (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary",
    ) => {
        const colorsMap = new Map<LibColorsShort, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_50],
            ["secondary", COLORS_LIGHT.SECONDARY_50],
            ["success", COLORS_LIGHT.SUCCESS_50],
            ["danger", COLORS_LIGHT.DANGER_50],
            ["warning", COLORS_LIGHT.WARNING_50],
            ["gray", COLORS_LIGHT.GRAY_50],
        ])

        return colorsMap.get($color)
    },

    // Icon: ({
    //     $name,
    //     $color = "currentColor",
    //     $size = 16,
    //     $isLibIcon,
    // }: IconMixin) => css`
    //     content: "";
    //     mask: url("${$isLibIcon ? `${$name}` : `/icons/${$name}.svg`}")
    //         no-repeat 50% 50%;
    //     mask-size: cover;
    //     background-color: ${ThemeLight.AllColors($color)};
    //     display: inline-block;
    //     width: ${$size}px;
    //     height: ${$size}px;
    // `,
}

export const ThemeDark = {
    ...COLORS_DARK,

    ColorsShort: ($color: LibColorsShort = "primary") =>
        colorsDarkShortMap.get($color),

    AllColors: ($color: LibAllColors = "primary") =>
        allColorsDarkMap.get($color),

    ColorsHoverDefault: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_500],
            ["secondary", COLORS_DARK.SECONDARY_500],
            ["success", COLORS_DARK.SUCCESS_500],
            ["danger", COLORS_DARK.DANGER_500],
            ["warning", COLORS_DARK.WARNING_500],
            ["white", COLORS_DARK.WHITE],
            ["font", COLORS_DARK.LINK_FONT_DEFAULT],
            ["background", COLORS_DARK.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverHover: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_300],
            ["secondary", COLORS_DARK.SECONDARY_300],
            ["success", COLORS_DARK.SUCCESS_300],
            ["danger", COLORS_DARK.DANGER_300],
            ["warning", COLORS_DARK.WARNING_300],
            ["white", COLORS_DARK.GRAY_300],
            ["font", COLORS_DARK.LINK_FONT_HOVER],
            ["background", COLORS_DARK.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverActive: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_600],
            ["secondary", COLORS_DARK.SECONDARY_600],
            ["success", COLORS_DARK.SUCCESS_600],
            ["danger", COLORS_DARK.DANGER_600],
            ["warning", COLORS_DARK.WARNING_600],
            ["white", COLORS_DARK.GRAY_100],
            ["font", COLORS_DARK.LINK_FONT_ACTIVE],
            ["background", COLORS_DARK.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostDefault: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_50],
            ["secondary", COLORS_DARK.SECONDARY_50],
            ["success", COLORS_DARK.SUCCESS_50],
            ["danger", COLORS_DARK.DANGER_50],
            ["warning", COLORS_DARK.WARNING_50],
            ["white", COLORS_DARK.GRAY_50],
            ["font", COLORS_DARK.FONT_GHOST_DEFAULT],
            ["background", COLORS_DARK.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostHover: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_200],
            ["secondary", COLORS_DARK.SECONDARY_200],
            ["success", COLORS_DARK.SUCCESS_200],
            ["danger", COLORS_DARK.DANGER_200],
            ["warning", COLORS_DARK.WARNING_200],
            ["white", COLORS_DARK.GRAY_200],
            ["font", COLORS_DARK.FONT_GHOST_HOVER],
            ["background", COLORS_DARK.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostActive: ($color: LibColorsHover = "primary") => {
        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_100],
            ["secondary", COLORS_DARK.SECONDARY_100],
            ["success", COLORS_DARK.SUCCESS_100],
            ["danger", COLORS_DARK.DANGER_100],
            ["warning", COLORS_DARK.WARNING_100],
            ["white", COLORS_DARK.GRAY_100],
            ["font", COLORS_DARK.FONT_GHOST_ACTIVE],
            ["background", COLORS_DARK.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    Colors50: (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary",
    ) => {
        const colorsMap = new Map<LibColorsShort, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_50],
            ["secondary", COLORS_DARK.SECONDARY_50],
            ["success", COLORS_DARK.SUCCESS_50],
            ["danger", COLORS_DARK.DANGER_50],
            ["warning", COLORS_DARK.WARNING_50],
            ["gray", COLORS_DARK.GRAY_50],
        ])

        return colorsMap.get($color)
    },

    // Icon: ({
    //     $name,
    //     $color = "currentColor",
    //     $size = 16,
    //     $isLibIcon,
    // }: IconMixin) => css`
    //     content: "";
    //     mask: url("${$isLibIcon ? `${$name}` : `/icons/${$name}.svg`}")
    //         no-repeat 50% 50%;
    //     mask-size: cover;
    //     background-color: ${ThemeDark.AllColors($color)};
    //     display: inline-block;
    //     width: ${$size}px;
    //     height: ${$size}px;
    // `,
}

export const Mixins = {
    Icon: ({
        $name,
        $color = "currentColor",
        $size = 16,
        $isLibIcon,
    }: IconMixin) => css`
        /* content: "";
        mask: url(${$isLibIcon ? `${$name}` : `/icons/${$name}.svg`}) no-repeat
            50% 50%;
        mask: url("/icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${({ theme }) => theme.AllColors($color)};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px; */
        content: "";
        mask: url("/icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${({ theme }) => theme.AllColors($color)};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,

    Overlay: ($overlay: LibOverlays | undefined) => {
        if (!$overlay) return null

        const overlaysMap = new Map<LibOverlays, OVERLAYS>([
            ["black-50", OVERLAYS.BLACK_50],
            ["black-80", OVERLAYS.BLACK_80],
            ["white-50", OVERLAYS.WHITE_50],
            ["white-80", OVERLAYS.WHITE_80],
            ["gradient-black", OVERLAYS.GRADIENT_BLACK],
            ["gradient-white", OVERLAYS.GRADIENT_WHITE],
        ])

        return overlaysMap.get($overlay)
    },

    BorderRadius: ($borderRadius: LibRadiusProps | undefined) => {
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
                : radiusMap.get($borderRadius)

        if (
            typeof $borderRadius === "number" ||
            typeof $borderRadius === "string"
        )
            return css`
                border-radius: ${getRadius($borderRadius)};
            `

        return css`
            border-top-left-radius: ${$borderRadius?.topLeft &&
            getRadius($borderRadius.topLeft)};
            border-top-right-radius: ${$borderRadius?.topRight &&
            getRadius($borderRadius.topRight)};
            border-bottom-left-radius: ${$borderRadius?.bottomLeft &&
            getRadius($borderRadius.bottomLeft)};
            border-bottom-right-radius: ${$borderRadius?.bottomRight &&
            getRadius($borderRadius.bottomRight)};
        `
    },

    Transition: ($transition: LibTransitions | undefined) => {
        if (!$transition) return null

        const transitionsMap = new Map<LibTransitions, TRANSITIONS>([
            ["short", TRANSITIONS.SHORT],
            ["long", TRANSITIONS.LONG],
            ["bezier", TRANSITIONS.BEZIER],
        ])

        return transitionsMap.get($transition)
    },

    Shadow: ($shadow: LibShadows | undefined) => {
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
    },

    BoxShadow: ($shadow: LibBoxShadowProps) => {
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
    },

    FontSize: (
        $fontSize: LibFontSizes | "inherit" | number | undefined = "body",
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
    },

    FontWeight: ($fontWeight: LibFontWeights | undefined = "regular") => {
        if (!$fontWeight) return null

        const fontWeightsMap = new Map<LibFontWeights, FONT_WEIGHTS>([
            ["regular", FONT_WEIGHTS.REGULAR],
            ["bold", FONT_WEIGHTS.BOLD],
            ["black", FONT_WEIGHTS.BLACK],
        ])

        return fontWeightsMap.get($fontWeight)
    },

    Spacer: ($spacer: LibSpacers | undefined) => {
        if (!$spacer) return null

        if (typeof $spacer === "number") return stringifyPx($spacer)

        const spacersMap = new Map<LibSpacers, SPACERS>([
            ["xxl", SPACERS.XXL],
            ["xl", SPACERS.XL],
            ["l", SPACERS.L],
            ["m", SPACERS.M],
            ["s", SPACERS.S],
            ["xs", SPACERS.XS],
            ["xxs", SPACERS.XXS],
        ])

        return spacersMap.get($spacer)
    },

    HideScrollbar: css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,

    StretchTags: css`
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
    `,

    Padding: ($padding: LibPaddingProps | undefined) => {
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
    },

    Grid: ({
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
            ? `repeat(${$col}, 1fr)`
            : $col};
        gap: ${$gap && Mixins.Spacer($gap)};
        column-gap: ${$columnGap && Mixins.Spacer($columnGap)};
        row-gap: ${$rowGap && Mixins.Spacer($rowGap)};
        justify-content: ${$justifyContent};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        align-content: ${$alignContent};
    `,

    Flexbox: ({
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
    `,
}
