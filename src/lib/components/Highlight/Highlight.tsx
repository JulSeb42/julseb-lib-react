import { forwardRef } from "react"
import { Text } from "../../"
import { getHighlightedText } from "../../lib-utils"
import type { ILibHighlight } from "./types"

/**
 * @description Highlight selected text
 * @link https://documentation-components-react.vercel.app/components/highlight
 * @extends ILibText
 * @prop ref?: ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>
 * @prop highlightedText: string
 * @prop highlightStyle?: CSSProperties
 * @prop color?: Any color from the library
 * @prop linkColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop textAlign?: CssTextAlign
 * @prop tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"
 * @prop display?: boolean => only if tag is set to h1 to h5
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
