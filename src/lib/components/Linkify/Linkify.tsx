import { Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibLinkify } from "./types"

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

/**
 * Linkify component that automatically detects URLs in the provided text and wraps them in anchor tags.
 *
 * @component
 *
 * @example
 * <Linkify>
 *   Visit https://github.com for more information.
 * </Linkify>
 *
 * @extends ILibText
 *
 * @prop {string} [props.className] - Additional class names to apply to the container element.
 * @prop {ElementType} [props.element=Text] - The HTML element or React component to render as the container. Default is `Text`.
 * @prop {RefObject<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLDListElement | HTMLOListElement | HTMLUListElement>} [props.ref] - Ref for the container element.
 * @prop {string} props.children - The text content to parse and linkify.
 * @prop {boolean} [props.blank] - If true, links open in a new tab (`_blank`). Default is `false`.
 * @prop {string} [props.linkClasses] - Additional class names to apply to the generated anchor tags.
 * @prop {object} [props.rest] - Additional props spread to the container element.
 *
 * @returns {ReactElement} The rendered Linkify component with URLs converted to clickable links.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/linkify
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
		<Element ref={ref} className={clsx("linkify", className)} {...rest}>
			{words?.map((word: string) =>
				word.match(URL_REGEX) ? (
					<Fragment key={uuid()}>
						<a
							href={word}
							target={blank ? "_blank" : undefined}
							rel={blank ? "noreferrer noopener" : undefined}
							className={clsx(linkClasses, "linkify-link")}
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
