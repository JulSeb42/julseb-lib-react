import type { FC } from "react"
import { Text } from "../../"
import { getHighlightedText } from "../../lib-utils"
import type { ILibHighlight } from "./types"

/**
 * Highlight component for emphasizing selected text within its children.
 *
 * @component
 * @extends ILibText
 * @param {Object} props - Highlight props.
 * @param {ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.highlightedText - Text to highlight within the children.
 * @param {CSSProperties} [props.highlightStyle] - Custom style for the highlighted text.
 * @param {string} [props.color] - Any color from the library.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.linkColor] - Link color for highlighted text.
 * @param {CssTextAlign} [props.textAlign] - Text alignment.
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"} [props.tag] - HTML tag to render as.
 * @param {boolean} [props.display] - Display property (only if tag is set to h1 to h5).
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Text content to search and highlight.
 * @returns {JSX.Element} The rendered Highlight component.
 *
 * @example
 * <Highlight highlightedText="React" highlightStyle={{ background: "yellow" }}>
 *   React makes it painless to create interactive UIs.
 * </Highlight>
 */
export const Highlight: FC<ILibHighlight> = ({
    ref,
    children = "",
    highlightedText,
    className,
    highlightStyle,
    ...rest
}) => {
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
