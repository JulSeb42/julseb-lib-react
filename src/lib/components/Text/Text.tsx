import type { FC } from "react"
import { H1 } from "./templates/H1"
import { H2 } from "./templates/H2"
import { H3 } from "./templates/H3"
import { H4 } from "./templates/H4"
import { H5 } from "./templates/H5"
import { H6 } from "./templates/H6"
import { P } from "./templates/P"
import { Strong } from "./templates/Strong"
import { Em } from "./templates/Em"
import { Small } from "./templates/Small"
import { Blockquote } from "./templates/Blockquote"
import { Ul } from "./templates/Ul"
import { Ol } from "./templates/Ol"
import { Dl } from "./templates/Dl"
import type { ILibText } from "./types"

/**
 * Text component for rendering semantic HTML text elements with flexible tag, color, alignment, and display options.
 *
 * @component
 * @extends HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement
 * @param {Object} props - Text props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.color] - Any color from the library.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.linkColor] - Link color for text links.
 * @param {CssTextAlign} [props.textAlign] - Text alignment.
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol" | "dl"} [props.tag="p"] - HTML tag to render as.
 * @param {boolean} [props.display] - Display property (only if tag is set to h1 to h5).
 * @returns {JSX.Element} The rendered Text component.
 *
 * @see https://documentation-components-react.vercel.app/styles/text
 * @example
 * <Text tag="h2" color="primary" textAlign="center">
 *   Welcome to the documentation!
 * </Text>
 */
export const Text: FC<ILibText> = ({ tag = "p", ...rest }) => {
    switch (tag) {
        case "h1":
            return <H1 {...rest} />
        case "h2":
            return <H2 {...rest} />
        case "h3":
            return <H3 {...rest} />
        case "h4":
            return <H4 {...rest} />
        case "h5":
            return <H5 {...rest} />
        case "h6":
            return <H6 {...rest} />
        case "strong":
            return <Strong {...rest} />
        case "em":
            return <Em {...rest} />
        case "small":
            return <Small {...rest} />
        case "blockquote":
            return <Blockquote {...rest} />
        case "ul":
            return <Ul {...rest} />
        case "ol":
            return <Ol {...rest} />
        case "dl":
            return <Dl {...rest} />
        default:
            return <P {...rest} />
    }
}
