import type { LibButtonVariant } from "../../types"
import type { ILibButtonMixin } from "../ComponentsMixins"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN BUTTON_ICON COMPONENTS

export interface ILibButtonIconStyles extends ILibButtonMixin {
    $variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    $size: number
    $showBackgroundHover?: boolean
}
