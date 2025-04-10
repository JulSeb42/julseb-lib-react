import type { LibButtonSize, LibSpacers } from "../../types"
import type { ILibButtonMixin } from "../ComponentsMixins"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN BUTTON COMPONENTS

export interface ILibButtonStyle extends ILibButtonMixin {
    $size?: LibButtonSize
    $gap?: LibSpacers
    $noPadding?: boolean
}
