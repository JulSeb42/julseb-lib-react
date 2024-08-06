/*=============================================== Select sub components types ===============================================*/

import type { MouseEventHandler } from "react"
import type { ILibSelect } from "./types"
import type { ILibInputBaseMixin } from "../ComponentsMixins"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN SELECT COMPONENTS

export interface ILibSelectButton
    extends Pick<
        ILibSelect,
        | "data-testid"
        | "className"
        | "selected"
        | "id"
        | "tabIndex"
        | "disabled"
        | "icons"
        | "inputVariant"
        | "inputBackground"
        | "validation"
        | "options"
    > {
    onClick?: MouseEventHandler<HTMLButtonElement>
    isOpen: boolean
    hasContainer: boolean
    hasWrapper: boolean
}

export interface ILibSelectButtonStyles extends ILibInputBaseMixin {
    $hasOptions: boolean
}
