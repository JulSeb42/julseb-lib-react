/*=============================================== Button types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibButtonVariant,
    LibButtonLinkBlank,
    LibColorsHover,
    ILibBoxShadow,
    ILibRadius,
    LibIcon,
    LibSpacers,
    LibButtonSize,
    LibLoaderVariant,
} from "../../types"

type ILibButtonBase = LibComponentBase<HTMLButtonElement & HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    LibButtonLinkBlank & {
        color?: LibColorsHover
        shadow?: ILibBoxShadow
        borderRadius?: ILibRadius
        size?: LibButtonSize
    }

type ButtonWithoutIcon = ILibButtonBase & {
    icons?: undefined
    iconSizes?: never
    isLoading?: undefined | null
    gap?: never
}

type ButtonWithIcon = ILibButtonBase & {
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

type ButtonIcon = ButtonWithoutIcon | ButtonWithIcon

type ButtonVariantWithBackground = ButtonIcon & {
    variant?: Extract<LibButtonVariant, "plain" | "outline" | "ghost">
    noPadding?: never
}

type ButtonVariantTransparent = ButtonIcon & {
    variant?: Extract<LibButtonVariant, "transparent">
    noPadding?: boolean
}

type ButtonVariant = ButtonVariantWithBackground | ButtonVariantTransparent

type ButtonLoading = ButtonVariant & {
    isLoading?: boolean
    loaderVariant?: LibLoaderVariant
}

type ButtonNotLoading = ButtonVariant & {
    isLoading?: undefined | null
    loaderVariant?: never
}

export type ILibButton = ButtonLoading | ButtonNotLoading
