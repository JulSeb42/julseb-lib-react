/*=============================================== ButtonIcon types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibIcon,
    LibBoxShadowProps,
    LibRadiusProps,
    LibButtonLinkBlank,
    LibColorsHover,
    LibTooltipPosition,
    LibSpacers,
    LibButtonIconVariant,
    LibLoaderVariant,
} from "../../types"

type ButtonIconPropsBase = LibComponentBase<
    HTMLButtonElement & HTMLAnchorElement
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    LibButtonLinkBlank & {
        icon: LibIcon
        iconSize?: number
        size?: number
        shadow?: LibBoxShadowProps
        borderRadius?: LibRadiusProps
        color?: LibColorsHover
        tooltip?: string
        showTooltip?:
            | boolean
            | {
                  position?: LibTooltipPosition
                  offset?: LibSpacers
              }
    }

type ButtonIconVariantsBackground = ButtonIconPropsBase & {
    variant?: Extract<LibButtonIconVariant, "plain" | "ghost">
    showBackgroundHover?: never
}

type ButtonIconVariantsWithoutBackground = ButtonIconPropsBase & {
    variant?: Extract<LibButtonIconVariant, "transparent">
    showBackgroundHover?: boolean
}

type ButtonIconPropsVariants =
    | ButtonIconVariantsBackground
    | ButtonIconVariantsWithoutBackground

type ButtonIconLoading = ButtonIconPropsVariants & {
    isLoading?: boolean
    loaderVariant?: Extract<LibLoaderVariant, 1 | 2 | 3>
    loaderBorderWidth?: number
}

type ButtonIconLoadingVariant = ButtonIconPropsVariants & {
    isLoading?: boolean
    loaderVariant?: Extract<LibLoaderVariant, 4>
    loaderBorderWidth?: never
}

type ButtonIconNotLoading = ButtonIconPropsVariants & {
    isLoading?: undefined
    loaderVariant?: never
    loaderBorderWidth?: never
}

export type ButtonIconProps =
    | ButtonIconLoading
    | ButtonIconLoadingVariant
    | ButtonIconNotLoading
