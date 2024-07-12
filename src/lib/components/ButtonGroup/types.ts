/*=============================================== ButtonGroup types ===============================================*/

import type {
    LibComponentBase,
    LibButtonGroupItem,
    LibColorsHover,
    LibButtonVariant,
    ILibRadius,
    LibButtonSize,
} from "../../types"

export interface ILibButtonGroup extends LibComponentBase<HTMLDivElement> {
    buttons: Array<LibButtonGroupItem>
    color?: LibColorsHover
    variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    borderRadius?: ILibRadius
    size?: LibButtonSize
}
