/*=============================================== Loader types ===============================================*/

import type {
    LibAllColors,
    LibComponentBase,
    LibLoaderVariant,
} from "../../types"

interface LoaderPropsBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    color?: LibAllColors
    children?: never
}

interface LoaderPropsBorder extends LoaderPropsBase {
    variant?: Extract<LibLoaderVariant, 1 | 2 | 3>
    borderWidth?: number
}

interface LoaderPropsDots extends LoaderPropsBase {
    variant?: Extract<LibLoaderVariant, 4>
    borderWidth?: never
}

export type LoaderProps = LoaderPropsBorder | LoaderPropsDots
