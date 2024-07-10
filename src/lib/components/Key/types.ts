/*=============================================== Key types ===============================================*/

import type { LibColorsHover, LibComponentBase } from "../../types"

const sizes = { large: "large", small: "small" } as const
export type KeySize = keyof typeof sizes

export interface KeyProps extends LibComponentBase<HTMLSpanElement> {
    keys: Array<string>
    size?: KeySize
    accentColor?: LibColorsHover
    withSeparator?: boolean
    children?: never
}
