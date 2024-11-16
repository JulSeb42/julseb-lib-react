/*=============================================== ButtonIcon types ===============================================*/

import type { ButtonHTMLAttributes, CSSProperties } from "react"
import type {
    LibComponentBase,
    LibIcon,
    ILibBoxShadow,
    ILibRadius,
    LibButtonLinkBlank,
    LibColorsHover,
    LibTooltipPosition,
    LibSpacers,
    LibButtonIconVariant,
    LibLoaderVariant,
    LibAllColors,
} from "../../types"

type ILibButtonIconBase = LibComponentBase<
    HTMLButtonElement & HTMLAnchorElement
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    LibButtonLinkBlank & {
        icon: LibIcon
        iconSize?: number
        iconBaseUrl?: string
        size?: number
        shadow?: ILibBoxShadow
        borderRadius?: ILibRadius
        color?: LibColorsHover
        children?: never
    }

type ButtonIconVariantsBackground = ILibButtonIconBase & {
    variant?: Extract<LibButtonIconVariant, "plain" | "ghost">
    showBackgroundHover?: never
}

type ButtonIconVariantsWithoutBackground = ILibButtonIconBase & {
    variant?: Extract<LibButtonIconVariant, "transparent">
    showBackgroundHover?: boolean
}

type ButtonIconVariant =
    | ButtonIconVariantsBackground
    | ButtonIconVariantsWithoutBackground

type ButtonIconLoading = ButtonIconVariant & {
    isLoading?: boolean
    loaderVariant?: Extract<LibLoaderVariant, 1 | 2 | 3>
    loaderBorderWidth?: number
}

type ButtonIconLoadingVariant = ButtonIconVariant & {
    isLoading?: boolean
    loaderVariant?: Extract<LibLoaderVariant, 4>
    loaderBorderWidth?: never
}

type ButtonIconNotLoading = ButtonIconVariant & {
    isLoading?: undefined
    loaderVariant?: never
    loaderBorderWidth?: never
}

type ILibButtonIconAndLoader =
    | ButtonIconLoading
    | ButtonIconLoadingVariant
    | ButtonIconNotLoading

type ButtonIconWithTooltip = ILibButtonIconAndLoader & {
    tooltip?: string
    showTooltip?:
        | boolean
        | {
              position?: LibTooltipPosition
              offset?: LibSpacers
              backgroundColor?: LibAllColors
              textColor?: LibAllColors
              hideArrow?: boolean
          }
    containerStyle?: CSSProperties
}

type ButtonIconWithoutTooltip = ILibButtonIconAndLoader & {
    tooltip?: undefined
    showTooltip?: never
    containerStyle?: never
}

export type ILibButtonIcon = ButtonIconWithTooltip | ButtonIconWithoutTooltip
