import { type FC } from "react"
import { clsx } from "../../utils"
import { H1 } from "./templates/H1"
import { H2 } from "./templates/H2"
import { H3 } from "./templates/H3"
import { H4 } from "./templates/H4"
import { H5 } from "./templates/H5"
import { H6 } from "./templates/H6"
import { P } from "./templates/P"
import { Small } from "./templates/Small"
import { Strong } from "./templates/Strong"
import { Em } from "./templates/Em"
import { Blockquote } from "./templates/Blockquote"
import { Ul } from "./templates/Ul"
import { Ol } from "./templates/Ol"
import { Dl } from "./templates/Dl"
import type { ILibText } from "./types"

export const BASE_CLASSES = clsx(
	"font-family-body",
	"[&>code]:font-family-code [&>code]:leading-8 [&>code]:p-1 [&>code]:text-blue-500 [&>code]:bg-gray-50 [&>code]:rounded-xs",
)

/**
 * Text component for rendering semantic HTML text elements with consistent styles.
 *
 * Renders the appropriate semantic element based on the `tag` prop, such as headings, paragraphs, lists, blockquotes, etc.
 *
 * @component
 * @example
 * <Text tag="h2">Section title</Text>
 * <Text tag="p">Paragraph content</Text>
 * <Text tag="ul">
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 * </Text>
 * 
 * @extends HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLDListElement & HTMLOListElement & HTMLUListElement
 *
 * @prop {object} props - Component props.
 * @prop {ElementType} [props.element="p"] - The HTML element or React component to render.
 * @prop {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"small"|"strong"|"em"|"blockquote"|"ul"|"ol"|"dl"} [props.tag="p"] - The semantic HTML tag to render.
 * @prop {string} [props.color="currentColor"] - Any color from the library.
 * @prop {"red"|"orange"|"amber"|"yellow"|"lime"|"green"|"emerald"|"teal"|"cyan"|"sky"|"blue"|"indigo"|"violet"|"purple"|"fuchsia"|"pink"|"rose"|"slate"} [props.linkColor="blue"] - Any hover color.
 * @prop {"text-left"|"text-center"|"text-right"|"text-justify"|"text-start"|"text-end"} [props.textAlign="left"] - Text alignment.
 * @prop {boolean} [props.display=false] - Whether to use display block.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {RefObject<any>} [props.ref] - Ref for the rendered element.
 * @prop {ReactNode} props.children - Text content.
 * @prop {object} [props.rest] - Additional props spread to the rendered element.
 *
 * @returns {JSX.Element} The rendered text element.
 *
 * @see https://doc-julseb-lib-react.vercel.app/styles/text
 */
export const Text: FC<ILibText> = ({ tag = "p", ...rest }) => {
	if (tag === "h1") return <H1 {...rest} />
	if (tag === "h2") return <H2 {...rest} />
	if (tag === "h3") return <H3 {...rest} />
	if (tag === "h4") return <H4 {...rest} />
	if (tag === "h5") return <H5 {...rest} />
	if (tag === "h6") return <H6 {...rest} />
	if (tag === "small") return <Small {...rest} />
	if (tag === "strong") return <Strong {...rest} />
	if (tag === "em") return <Em {...rest} />
	if (tag === "blockquote") return <Blockquote {...rest} />
	if (tag === "ul") return <Ul {...rest} />
	if (tag === "ol") return <Ol {...rest} />
	if (tag === "dl") return <Dl {...rest} />
	return <P {...rest} />
}
