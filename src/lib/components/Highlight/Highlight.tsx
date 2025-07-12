import { type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import { getHighlightedText } from "../../lib-utils"
import type { ILibHighlight } from "./types"

/**
 * Highlight component for emphasizing parts of text.
 *
 * @component
 *
 * @example
 * <Highlight highlightedText="important" highlightClasses="bg-yellow-200" />
 *
 * @prop {string} highlightedText - The substring to highlight within the children.
 * @prop {CSSProperties} [highlightStyle] - Inline style to apply to the highlighted text.
 * @prop {string} [highlightClasses] - Additional class names to apply to the highlighted text.
 *
 * @returns {JSX.Element} The rendered Highlight component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/highlight
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
		<Element ref={ref} className={clsx("highlight", className)} {...rest}>
			{getHighlightedText(
				children,
				highlightedText,
				highlightStyle,
				highlightClasses,
			)}
		</Element>
	)
}
