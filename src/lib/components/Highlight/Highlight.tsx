/*=============================================== Highlight component ===============================================*/

import { forwardRef } from "react"
import { Text } from "../../"
import { getHighlightedText } from "../../lib-utils"
import type { HighlightProps } from "./types"

/**
 * @description Highlight selected text
 * @link https://documentation-components-react.vercel.app/components/highlight
 * @extends TextProps
 * @prop highlightedText: string
 */

export const Highlight = forwardRef<
    HTMLHeadingElement &
        HTMLParagraphElement &
        HTMLQuoteElement &
        HTMLUListElement &
        HTMLOListElement &
        HTMLDListElement,
    HighlightProps
>(({ children = "", highlightedText, className, ...rest }, ref) => {
    return (
        <Text ref={ref} className={className} {...rest}>
            {getHighlightedText(children, highlightedText, className)}
        </Text>
    )
})
