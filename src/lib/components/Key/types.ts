/*=============================================== Key types ===============================================*/

import type { LibComponentBase, LibKeySize, LibColorsShort } from "../../types"

export interface KeyProps extends LibComponentBase<HTMLSpanElement> {
    keys: Array<string>
    size?: LibKeySize
    accentColor?: Exclude<LibColorsShort, "black" | "white">
    withSeparator?: boolean
    children?: never
}
