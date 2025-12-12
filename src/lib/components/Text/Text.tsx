import { lazy, type FC } from "react"
import { clsx } from "../../utils"
import type { ILibText } from "./types"

const H1 = lazy(() => import("./templates/H1"))
const H2 = lazy(() => import("./templates/H2"))
const H3 = lazy(() => import("./templates/H3"))
const H4 = lazy(() => import("./templates/H4"))
const H5 = lazy(() => import("./templates/H5"))
const H6 = lazy(() => import("./templates/H6"))
const P = lazy(() => import("./templates/P"))
const Small = lazy(() => import("./templates/Small"))
const Strong = lazy(() => import("./templates/Strong"))
const Em = lazy(() => import("./templates/Em"))
const Blockquote = lazy(() => import("./templates/Blockquote"))
const Ul = lazy(() => import("./templates/Ul"))
const Ol = lazy(() => import("./templates/Ol"))
const Dl = lazy(() => import("./templates/Dl"))

export const TEXT_BASE_CLASSES = clsx(
	"font-family-body",
	"[&_code]:font-family-code [&_code]:leading-8 [&_code]:p-1 [&_code]:text-primary-500 [&_code]:bg-gray-50 [&_code]:rounded-xs",
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
const Text: FC<ILibText> = ({ tag = "p", ...rest }) => {
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
		case "small":
			return <Small {...rest} />
		case "strong":
			return <Strong {...rest} />
		case "em":
			return <Em {...rest} />
		case "blockquote":
			return <Blockquote {...rest} />
		case "ul":
			return <Ul {...rest} />
		case "ol":
			return <Ol {...rest} />
		case "dl":
			return <Dl {...rest} />
		case "p":
		default:
			return <P {...rest} />
	}
}
export default Text
