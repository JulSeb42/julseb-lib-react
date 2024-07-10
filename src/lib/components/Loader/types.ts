/*=============================================== Loader types ===============================================*/

import type { LibAllColors, LibComponentBase } from "../../types"

const loaderVariants = { 1: 1, 2: 2, 3: 3, 4: 4 } as const
export type LoaderVariant = keyof typeof loaderVariants

interface LoaderPropsBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    color?: LibAllColors
    children?: never
}

interface LoaderPropsBorder extends LoaderPropsBase {
    variant?: Extract<LoaderVariant, 1 | 2 | 3>
    borderWidth?: number
}

interface LoaderPropsDots extends LoaderPropsBase {
    variant?: Extract<LoaderVariant, 4>
    borderWidth?: never
}

export type LoaderProps = LoaderPropsBorder | LoaderPropsDots
