import { type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibListGroupItem } from "./types"

/**
 * ListGroupItem component for rendering individual items within a list group with optional numbering, content, and separators.
 *
 * @component
 *
 * @example
 * <ListGroupItem
 *   title="Item Title"
 *   body="Item description"
 *   number={1}
 *   contentRight={<Button>Action</Button>}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the list item container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the list item container element.
 * @prop {React.ReactNode} [props.children] - Child components to render inside the list item.
 * @prop {string} [props.title] - Title text to display for the list item.
 * @prop {string} [props.body] - Body text or description to display below the title.
 * @prop {React.ReactNode} [props.contentRight] - Content to display on the right side of the list item.
 * @prop {boolean} [props.noSeparator] - Whether to hide the separator border between list items.
 * @prop {number} [props.number] - Number to display before the title when using numbered lists.
 *
 * @returns {JSX.Element} The rendered ListGroupItem component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/list-group
 */
export const ListGroupItem: FC<ILibListGroupItem> = ({
	className,
	element = "div",
	ref,
	children,
	title,
	body,
	contentRight,
	noSeparator,
	number,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex justify-between gap-2 p-2 w-full",
				!noSeparator &&
					"[&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-gray-200",
				"disabled:bg-gray-200 disabled:text-gray-500",
				"list-group-item",
				className,
			)}
			{...rest}
		>
			{children ?? (
				<>
					<div className="flex flex-col gap-0.5 content-wrapper grow">
						{number ? (
							<span className="inline-flex gap-2 title-wrapper">
								<span className="number">{number}</span>
								<Text tag="h6" className="title">
									{title}
								</Text>
							</span>
						) : (
							<Text tag="h6" className="title">
								{title}
							</Text>
						)}

						{body && <Text className="body">{body}</Text>}
					</div>

					{contentRight}
				</>
			)}
		</Element>
	)
}
