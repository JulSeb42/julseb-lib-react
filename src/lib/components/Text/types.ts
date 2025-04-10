import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    CssTextAlign,
    LibTextDisplayTag,
    LibTextTag,
} from "../../types"

interface ILibTextBase extends LibComponentBase<HTMLElement> {
    color?: LibAllColors
    linkColor?: LibColorsHover
    textAlign?: CssTextAlign
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
