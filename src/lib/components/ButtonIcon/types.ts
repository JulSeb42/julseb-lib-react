/*=============================================== ButtonIcon types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibIcon,
    LibButtonVariant,
    LibBoxShadowProps,
    LibRadiusProps,
    LibButtonLinkBlank,
    LibColorsHover,
    LibTooltipPosition,
    LibSpacers,
} from "../../types"
import type { LoaderVariant } from "../Loader/types"

export type ButtonIconVariant = Extract<
    LibButtonVariant,
    "plain" | "transparent" | "ghost"
>

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
    variant?: Extract<ButtonIconVariant, "plain" | "ghost">
    showBackgroundHover?: never
}

type ButtonIconVariantsWithoutBackground = ButtonIconPropsBase & {
    variant?: Extract<ButtonIconVariant, "transparent">
    showBackgroundHover?: boolean
}

type ButtonIconPropsVariants =
    | ButtonIconVariantsBackground
    | ButtonIconVariantsWithoutBackground

type ButtonIconLoading = ButtonIconPropsVariants & {
    isLoading?: boolean
    loaderVariant?: Extract<LoaderVariant, 1 | 2 | 3>
    loaderBorderWidth?: number
}

type ButtonIconLoadingVariant = ButtonIconPropsVariants & {
    isLoading?: boolean
    loaderVariant?: Extract<LoaderVariant, 4>
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
