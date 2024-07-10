/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    colorsLightShortMap,
    allColorsLightMap,
    colorsDarkShortMap,
    allColorsDarkMap,
    overlaysMap,
} from "./utils"
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
    LibMarginProps,
    LibBorderProps,
    LibAllColorsAndOverlays,
    LibOutlineProps,
    LibColorsHoverAndCurrent,
    BackgroundImageProps,
} from "./types"

type IconMixin = {
    $name: string
    $color?: LibAllColors
    $size?: number
    $isLibIcon?: boolean
}

export const THEME_LIGHT = {
    ...COLORS_LIGHT,

    ColorsShort: ($color: LibColorsShort = "primary") =>
        colorsLightShortMap.get($color),

    AllColors: ($color: LibAllColors = "primary") =>
        allColorsLightMap.get($color),

    ColorsAndOverlays($color: LibAllColorsAndOverlays | undefined) {
        if (!$color) return null

        if (
            $color === "black-50" ||
            $color === "black-80" ||
            $color === "white-50" ||
            $color === "white-80" ||
            $color === "gradient-white" ||
            $color === "gradient-black"
        )
            return Mixins.Overlay($color)

        return THEME_LIGHT.AllColors($color)
    },

    ColorsHoverDefault($color: LibColorsHoverAndCurrent = "primary") {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_500],
            ["secondary", COLORS_LIGHT.SECONDARY_500],
            ["success", COLORS_LIGHT.SUCCESS_500],
            ["danger", COLORS_LIGHT.DANGER_500],
            ["warning", COLORS_LIGHT.WARNING_500],
            ["white", COLORS_LIGHT.WHITE],
            ["gray", COLORS_LIGHT.GRAY_500],
            ["font", COLORS_LIGHT.LINK_FONT_DEFAULT],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverHover($color: LibColorsHoverAndCurrent = "primary") {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_300],
            ["secondary", COLORS_LIGHT.SECONDARY_300],
            ["success", COLORS_LIGHT.SUCCESS_300],
            ["danger", COLORS_LIGHT.DANGER_300],
            ["warning", COLORS_LIGHT.WARNING_300],
            ["white", COLORS_LIGHT.GRAY_300],
            ["gray", COLORS_LIGHT.GRAY_300],
            ["font", COLORS_LIGHT.LINK_FONT_HOVER],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverActive($color: LibColorsHoverAndCurrent = "primary") {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_600],
            ["secondary", COLORS_LIGHT.SECONDARY_600],
            ["success", COLORS_LIGHT.SUCCESS_600],
            ["danger", COLORS_LIGHT.DANGER_600],
            ["warning", COLORS_LIGHT.WARNING_600],
            ["white", COLORS_LIGHT.GRAY_100],
            ["gray", COLORS_LIGHT.GRAY_600],
            ["font", COLORS_LIGHT.LINK_FONT_ACTIVE],
            ["background", COLORS_LIGHT.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostDefault($color: LibColorsHoverAndCurrent = "primary") {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_50],
            ["secondary", COLORS_LIGHT.SECONDARY_50],
            ["success", COLORS_LIGHT.SUCCESS_50],
            ["danger", COLORS_LIGHT.DANGER_50],
            ["warning", COLORS_LIGHT.WARNING_50],
            ["white", COLORS_LIGHT.GRAY_50],
            ["gray", COLORS_LIGHT.GRAY_50],
            ["font", COLORS_LIGHT.FONT_GHOST_DEFAULT],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostHover($color: LibColorsHoverAndCurrent = "primary") {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_200],
            ["secondary", COLORS_LIGHT.SECONDARY_200],
            ["success", COLORS_LIGHT.SUCCESS_200],
            ["danger", COLORS_LIGHT.DANGER_200],
            ["warning", COLORS_LIGHT.WARNING_200],
            ["white", COLORS_LIGHT.GRAY_200],
            ["gray", COLORS_LIGHT.GRAY_200],
            ["font", COLORS_LIGHT.FONT_GHOST_HOVER],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostActive: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_LIGHT>([
            ["primary", COLORS_LIGHT.PRIMARY_100],
            ["secondary", COLORS_LIGHT.SECONDARY_100],
            ["success", COLORS_LIGHT.SUCCESS_100],
            ["danger", COLORS_LIGHT.DANGER_100],
            ["warning", COLORS_LIGHT.WARNING_100],
            ["white", COLORS_LIGHT.GRAY_100],
            ["gray", COLORS_LIGHT.GRAY_100],
            ["font", COLORS_LIGHT.FONT_GHOST_ACTIVE],
            ["background", COLORS_LIGHT.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    Colors50: (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary"
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
}

export const THEME_DARK = {
    ...COLORS_DARK,

    ColorsShort: ($color: LibColorsShort = "primary") =>
        colorsDarkShortMap.get($color),

    AllColors: ($color: LibAllColors = "primary") =>
        allColorsDarkMap.get($color),

    ColorsAndOverlays: ($color: LibAllColorsAndOverlays | undefined) => {
        if (!$color) return null

        if (
            $color === "black-50" ||
            $color === "black-80" ||
            $color === "white-50" ||
            $color === "white-80" ||
            $color === "gradient-white" ||
            $color === "gradient-black"
        )
            return Mixins.Overlay($color)

        return THEME_DARK.AllColors($color)
    },

    ColorsHoverDefault: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_500],
            ["secondary", COLORS_DARK.SECONDARY_500],
            ["success", COLORS_DARK.SUCCESS_500],
            ["danger", COLORS_DARK.DANGER_500],
            ["warning", COLORS_DARK.WARNING_500],
            ["white", COLORS_DARK.WHITE],
            ["gray", COLORS_DARK.GRAY_500],
            ["font", COLORS_DARK.LINK_FONT_DEFAULT],
            ["background", COLORS_DARK.LINK_BACKGROUND_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverHover: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_300],
            ["secondary", COLORS_DARK.SECONDARY_300],
            ["success", COLORS_DARK.SUCCESS_300],
            ["danger", COLORS_DARK.DANGER_300],
            ["warning", COLORS_DARK.WARNING_300],
            ["white", COLORS_DARK.GRAY_300],
            ["gray", COLORS_DARK.GRAY_300],
            ["font", COLORS_DARK.LINK_FONT_HOVER],
            ["background", COLORS_DARK.LINK_BACKGROUND_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsHoverActive: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_600],
            ["secondary", COLORS_DARK.SECONDARY_600],
            ["success", COLORS_DARK.SUCCESS_600],
            ["danger", COLORS_DARK.DANGER_600],
            ["warning", COLORS_DARK.WARNING_600],
            ["white", COLORS_DARK.GRAY_100],
            ["gray", COLORS_DARK.GRAY_600],
            ["font", COLORS_DARK.LINK_FONT_ACTIVE],
            ["background", COLORS_DARK.LINK_BACKGROUND_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostDefault: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_50],
            ["secondary", COLORS_DARK.SECONDARY_50],
            ["success", COLORS_DARK.SUCCESS_50],
            ["danger", COLORS_DARK.DANGER_50],
            ["warning", COLORS_DARK.WARNING_50],
            ["white", COLORS_DARK.GRAY_50],
            ["gray", COLORS_DARK.GRAY_50],
            ["font", COLORS_DARK.FONT_GHOST_DEFAULT],
            ["background", COLORS_DARK.BACKGROUND_GHOST_DEFAULT],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostHover: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_200],
            ["secondary", COLORS_DARK.SECONDARY_200],
            ["success", COLORS_DARK.SUCCESS_200],
            ["danger", COLORS_DARK.DANGER_200],
            ["warning", COLORS_DARK.WARNING_200],
            ["white", COLORS_DARK.GRAY_200],
            ["gray", COLORS_DARK.GRAY_200],
            ["font", COLORS_DARK.FONT_GHOST_HOVER],
            ["background", COLORS_DARK.BACKGROUND_GHOST_HOVER],
        ])

        return colorsMap.get($color)
    },

    ColorsGhostActive: ($color: LibColorsHoverAndCurrent = "primary") => {
        if ($color === "currentColor") return "currentColor"

        const colorsMap = new Map<LibColorsHover, COLORS_DARK>([
            ["primary", COLORS_DARK.PRIMARY_100],
            ["secondary", COLORS_DARK.SECONDARY_100],
            ["success", COLORS_DARK.SUCCESS_100],
            ["danger", COLORS_DARK.DANGER_100],
            ["warning", COLORS_DARK.WARNING_100],
            ["white", COLORS_DARK.GRAY_100],
            ["gray", COLORS_DARK.GRAY_100],
            ["font", COLORS_DARK.FONT_GHOST_ACTIVE],
            ["background", COLORS_DARK.BACKGROUND_GHOST_ACTIVE],
        ])

        return colorsMap.get($color)
    },

    Colors50: (
        $color: Exclude<LibColorsShort, "black" | "white"> = "primary"
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
}

export const Mixins = {
    Icon: ({
        $name,
        $color = "currentColor",
        $size = 16,
        $isLibIcon,
    }: IconMixin) => css`
        content: "";
        background-color: ${({ theme }) => theme.AllColors($color)};
        -webkit-mask-image: url(${$isLibIcon ? $name : `/icons/${$name}.svg`});
        -webkit-mask-size: cover;
        mask-image: url(${$isLibIcon ? $name : `/icons/${$name}.svg`});
        mask-size: cover;
        width: ${$size}px;
        height: ${$size}px;
        display: inline-block;
    `,

    Overlay: ($overlay: LibOverlays | undefined) => {
        if (!$overlay) return null

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

    BoxShadow: ($shadow?: LibBoxShadowProps) => {
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
    },

    FontSize: (
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

    Spacer: ($spacer: LibSpacers | "auto" | undefined) => {
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

    Margin: ($margin: LibMarginProps) => {
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

    /**
     *
     * @param param0
     * @returns
     */
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

    Border: ($border?: LibBorderProps) => {
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
    },

    Outline: ($outline?: LibOutlineProps) => {
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
    },

    BackgroundImage: (props?: BackgroundImageProps) => {
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
    },
}
