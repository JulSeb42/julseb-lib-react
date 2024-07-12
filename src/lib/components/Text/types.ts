/*=============================================== Text types ===============================================*/

import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    TextAlign,
    LibTextDisplayTag,
    LibTextTag,
} from "../../types"

interface ILibTextBase extends LibComponentBase<HTMLElement> {
    color?: LibAllColors
    linkColor?: LibColorsHover
    textAlign?: TextAlign
}

interface TextDisplay extends ILibTextBase {
    tag?: LibTextDisplayTag
    display?: boolean
}

interface TextOther extends ILibTextBase {
    tag?: LibTextTag
    display?: never
}

export type ILibText = TextDisplay | TextOther
