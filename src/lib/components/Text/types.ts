/*=============================================== Text types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { TextAlign, LibAllColors, LibColorsHover } from "../../types"

const textTags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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

export type TextTag = keyof typeof textTags

interface TextPropsBase extends HTMLAttributes<HTMLElement> {
    "data-testid"?: string
    as?: ElementType
    color?: LibAllColors
    linkColor?: LibColorsHover
    textAlign?: TextAlign
}

interface TextPropsDisplay extends TextPropsBase {
    tag?: Exclude<
        TextTag,
        | "h6"
        | "p"
        | "strong"
        | "em"
        | "small"
        | "blockquote"
        | "ul"
        | "ol"
        | "dl"
    >
    display?: boolean
}

interface TextPropsOther extends TextPropsBase {
    tag?: Exclude<TextTag, "h1" | "h2" | "h3" | "h4" | "h5">
    display?: never
}

export type TextProps = TextPropsDisplay | TextPropsOther

