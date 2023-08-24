/*=============================================== Highlight component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { getHighlightedText, Text } from "../../"

import type { HighlightProps } from "./types"

export const Highlight = forwardRef(
    (
        { children = "", highlightedText, ...rest }: HighlightProps,
        ref?: ForwardedRef<
            HTMLHeadingElement &
                HTMLParagraphElement &
                HTMLQuoteElement &
                HTMLUListElement &
                HTMLOListElement &
                HTMLDListElement
        >,
    ) => {
        return (
            <Text ref={ref} {...rest}>
                {getHighlightedText(children, highlightedText)}
            </Text>
        )
    },
)
