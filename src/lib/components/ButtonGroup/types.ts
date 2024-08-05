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
    toggles?: never
    toggleType?: never
    name?: string
}

interface ButtonGroupWithToggles extends ILibButtonGroupBase {
    buttons?: never
    toggles: Array<LibButtonGroupToggle>
    toggleType?: LibButtonGroupToggleSelect
    name: string
}

export type ILibButtonGroup = ButtonGroupWithButtons | ButtonGroupWithToggles
