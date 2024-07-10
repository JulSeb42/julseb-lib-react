/*=============================================== Button types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibButtonVariant,
    LibButtonLinkBlank,
    LibColorsHover,
    LibBoxShadowProps,
    LibRadiusProps,
    LibIcon,
    LibSpacers,
    LibButtonSize,
} from "../../types"
import type { LoaderVariant } from "../Loader/types"

type ButtonPropsBase = LibComponentBase<HTMLButtonElement & HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    LibButtonLinkBlank & {
        color?: LibColorsHover
        shadow?: LibBoxShadowProps
        borderRadius?: LibRadiusProps
        size?: LibButtonSize
    }

type ButtonPropsNoIcon = ButtonPropsBase & {
    icons?: undefined
    iconSizes?: never
    isLoading?: undefined | null
    gap?: never
}

type ButtonPropsWithIcon = ButtonPropsBase & {
    icons?: {
        left?: LibIcon
        right?: LibIcon
    }
    iconSizes?: {
        left?: number
        right?: number
    }
    isLoading?: boolean
    gap?: LibSpacers
}

type ButtonPropsIcon = ButtonPropsNoIcon | ButtonPropsWithIcon

type ButtonPropsVariantBackground = ButtonPropsIcon & {
    variant?: Extract<LibButtonVariant, "plain" | "outline" | "ghost">
    noPadding?: never
}

type ButtonPropsVariantTransparent = ButtonPropsIcon & {
    variant?: Extract<LibButtonVariant, "transparent">
    noPadding?: boolean
}

type ButtonPropsVariant =
    | ButtonPropsVariantBackground
    | ButtonPropsVariantTransparent

type ButtonPropsWithLoading = ButtonPropsVariant & {
    isLoading?: boolean
    loaderVariant?: LoaderVariant
}

type ButtonPropsNoLoading = ButtonPropsVariant & {
    isLoading?: undefined | null
    loaderVariant?: never
}

export type ButtonProps = ButtonPropsWithLoading | ButtonPropsNoLoading
