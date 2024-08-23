/*=============================================== Highlight component ===============================================*/

import { forwardRef } from "react"
import { Text } from "../../"
import { getHighlightedText } from "../../lib-utils"
import type { ILibHighlight } from "./types"

/**
 * @description Highlight selected text
 * @link https://documentation-components-react.vercel.app/components/highlight
 * @extends ILibText
 * @prop ref?: ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>
 */
export const Highlight = forwardRef<
    HTMLHeadingElement &
        HTMLParagraphElement &
        HTMLQuoteElement &
        HTMLUListElement &
        HTMLOListElement &
        HTMLDListElement,
    ILibHighlight
>(
    (
        { children = "", highlightedText, className, highlightStyle, ...rest },
        ref
    ) => {
        return (
            <Text ref={ref} className={className} {...rest}>
                {getHighlightedText(
                    children,
                    highlightedText,
                    className,
                    highlightStyle
                )}
            </Text>
        )
    }
)
