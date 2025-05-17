import { Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibLinkify } from "./types"

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

/**
 * Linkify component that automatically detects URLs in text and wraps them in anchor tags.
 *
 * @component
 * @link https://documentation-components-react.vercel.app/components/linkify
 * @extends ILibText
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element=Text] - The HTML element or React component to render as the container.
 * @param {RefObject<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLDListElement | HTMLOListElement | HTMLUListElement>} [props.ref] - Ref for the container.
 * @param {string} props.children - The text content to parse and linkify.
 * @param {boolean} [props.blank] - If true, links open in a new tab.
 * @param {object} [props.rest] - Additional props spread to the container.
 * @returns {ReactElement} The rendered Linkify component.
 */
export const Linkify: FC<ILibLinkify> = ({
	className,
	element = Text,
	ref,
	children,
	blank,
	linkClasses,
	...rest
}) => {
	const Element = element

	const words: Array<string> = children ? children.split(" ") : []

	return (
		<Element ref={ref} className={clsx(className)} {...rest}>
			{words?.map((word: string) =>
				word.match(URL_REGEX) ? (
					<Fragment key={uuid()}>
						<a
							href={word}
							target={blank ? "_blank" : undefined}
							rel={blank ? "noreferrer noopener" : undefined}
							className={clsx(linkClasses)}
						>
							{word}
						</a>{" "}
					</Fragment>
				) : (
					word + " "
				),
			)}
		</Element>
	)
}
