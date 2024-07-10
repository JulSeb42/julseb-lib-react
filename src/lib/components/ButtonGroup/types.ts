/*=============================================== ButtonGroup types ===============================================*/

import type {
    LibComponentBase,
    LibButtonGroupItem,
    LibColorsHover,
    LibButtonVariant,
    LibRadiusProps,
    LibButtonSize,
} from "../../types"

export interface ButtonGroupProps extends LibComponentBase<HTMLDivElement> {
    buttons: Array<LibButtonGroupItem>
    color?: LibColorsHover
    variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    borderRadius?: LibRadiusProps
    size?: LibButtonSize
}
