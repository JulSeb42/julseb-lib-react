/*=============================================== ButtonGroup types ===============================================*/

import type {
    LibComponentBase,
    LibButtonGroupButtonItem,
    LibColorsHover,
    LibButtonVariant,
    ILibRadius,
    LibButtonSize,
    LibButtonGroupToggleSelect,
    LibButtonGroupToggle,
} from "../../types"

interface ILibButtonGroupBase extends LibComponentBase<HTMLDivElement> {
    color?: LibColorsHover
    variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    borderRadius?: ILibRadius
    size?: LibButtonSize
    iconBaseUrl?: string
}

interface ButtonGroupWithButtons extends ILibButtonGroupBase {
    buttons: Array<LibButtonGroupButtonItem>
    name?: string
    toggles?: never
    toggleType?: never
}

interface ButtonGroupWithToggles extends ILibButtonGroupBase {
    buttons?: never
    name: string
    toggles: Array<LibButtonGroupToggle>
    toggleType?: LibButtonGroupToggleSelect
}

export type ILibButtonGroup = ButtonGroupWithButtons | ButtonGroupWithToggles
