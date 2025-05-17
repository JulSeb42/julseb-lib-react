import { type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import { getHighlightedText } from "../../lib-utils"
import type { ILibHighlight } from "./types"

/**
 * Highlight component for emphasizing parts of text.
 *
 * @component
 * @link https://documentation-components-react.vercel.app/components/highlight
 * @extends ILibText
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element=Text] - The HTML element or React component to render as the container.
 * @param {RefObject<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLDListElement | HTMLOListElement | HTMLUListElement>} [props.ref] - Ref for the container.
 * @param {ReactNode} props.children - The text content to display.
 * @param {string} [props.highlightedText] - The substring to highlight within the children.
 * @param {string} [props.highlightClasses] - Additional class names to apply to the highlighted text.
 * @param {CSSProperties} [props.highlightStyle] - Inline style to apply to the highlighted text.
 * @param {object} [props.rest] - Additional props spread to the container.
 * @returns {JSX.Element} The rendered Highlight component.
 */
export const Highlight: FC<ILibHighlight> = ({
	className,
	element = Text,
	ref,
	children,
	highlightedText,
	highlightClasses,
	highlightStyle,
	...rest
}) => {
	const Element = element

	return (
		<Element ref={ref} className={clsx(className)} {...rest}>
			{getHighlightedText(
				children,
				highlightedText,
				highlightStyle,
				highlightClasses,
			)}
		</Element>
	)
}
