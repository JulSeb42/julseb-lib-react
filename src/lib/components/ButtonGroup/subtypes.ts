/*=============================================== ButtonGroup sub components types ===============================================*/

import type {
    DispatchState,
    LibButtonGroupButtonItem,
    LibButtonGroupToggle,
} from "../../types"
import type { ILibButtonGroup } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN BUTTON_GROUP COMPONENTS

export interface ILibButtonGroupButton
    extends Pick<
        ILibButtonGroup,
        | "data-testid"
        | "className"
        | "variant"
        | "color"
        | "size"
        | "iconBaseUrl"
    > {
    button: LibButtonGroupButtonItem
    index: number
}

export interface ILibButtonGroupToggle
    extends Pick<
        ILibButtonGroup,
        | "data-testid"
        | "className"
        | "toggleType"
        | "color"
        | "variant"
        | "size"
        | "name"
        | "iconBaseUrl"
    > {
    toggle: LibButtonGroupToggle
    toggles: { [id: string]: boolean }
    setToggles: DispatchState<{ [id: string]: boolean }>
    index: number
}
