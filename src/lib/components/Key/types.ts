/*=============================================== Key types ===============================================*/

import type { LibColorsHover, LibComponentBase, typeValues } from "../../types"

export type KeySize = keyof typeof typeValues.keySizes

export interface KeyProps extends LibComponentBase<HTMLSpanElement> {
    keys: Array<string>
    size?: KeySize
    accentColor?: LibColorsHover
    withSeparator?: boolean
    children?: never
}
