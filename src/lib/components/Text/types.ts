/*=============================================== Text types ===============================================*/

import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    TextAlign,
    LibTextDisplayTag,
    LibTextTag,
} from "../../types"

interface TextPropsBase extends LibComponentBase<HTMLElement> {
    color?: LibAllColors
    linkColor?: LibColorsHover
    textAlign?: TextAlign
}

interface TextPropsDisplay extends TextPropsBase {
    tag?: LibTextDisplayTag
    display?: boolean
}

interface TextPropsOther extends TextPropsBase {
    tag?: LibTextTag
    display?: never
}

export type TextProps = TextPropsDisplay | TextPropsOther
