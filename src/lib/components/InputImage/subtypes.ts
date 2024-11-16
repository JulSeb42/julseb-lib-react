/*=============================================== InputImage sub components types ===============================================*/

import type { ILibInputImage } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN INPUT IMAGE COMPONENTS

export interface ILibEmptyContainer
    extends Pick<
        ILibInputImage,
        | "data-testid"
        | "className"
        | "validation"
        | "iconSizes"
        | "icons"
        | "iconBaseUrl"
    > {}

export interface ILibHoverContainer
    extends Pick<
        ILibInputImage,
        | "data-testid"
        | "className"
        | "validation"
        | "icons"
        | "iconSizes"
        | "iconBaseUrl"
        | "disabled"
    > {
    isVisible: boolean
}
