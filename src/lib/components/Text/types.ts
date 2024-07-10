/*=============================================== Text types ===============================================*/

import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    TextAlign,
} from "../../types"

const displayTags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
} as const

const textTags = {
    h6: "h6",
    p: "p",
    strong: "strong",
    em: "em",
    small: "small",
    blockquote: "blockquote",
    ul: "ul",
    ol: "ol",
    dl: "dl",
} as const

const allTags = { ...displayTags, ...textTags } as const

export type LibDisplayTextTag = keyof typeof displayTags
export type LibTextTag = keyof typeof textTags
export type LibAllTextTags = keyof typeof allTags

interface TextPropsBase extends LibComponentBase<HTMLElement> {
    color?: LibAllColors
    linkColor?: LibColorsHover
    textAlign?: TextAlign
}

interface TextPropsDisplay extends TextPropsBase {
    tag?: LibDisplayTextTag
    display?: boolean
}

interface TextPropsOther extends TextPropsBase {
    tag?: LibTextTag
    display?: never
}

export type TextProps = TextPropsDisplay | TextPropsOther
