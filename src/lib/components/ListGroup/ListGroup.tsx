import { useRef, lazy, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import { useMergeRefs } from "../../hooks"
import type { ILibListGroup } from "./types"

const ListGroupTitle = lazy(() => import("./ListGroupTitle"))
const ListGroupItem = lazy(() => import("./ListGroupItem"))

/**
 * ListGroup component for displaying a structured list of items with optional title, numbering, and separators.
 *
 * @component
 *
 * @example
 * <ListGroup
 *   title="My List"
 *   items={[
 *     { title: "Item 1", body: "Description 1" },
 *     { title: "Item 2", body: "Description 2" }
 *   ]}
 *   showNumbers
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the list group container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the list group container element.
 * @prop {React.ReactNode} [props.children] - Child components to render inside the list group.
 * @prop {string | object} [props.title] - Title text or configuration object for the list group header.
 * @prop {boolean} [props.noSeparator] - Whether to hide separators between list items.
 * @prop {boolean} [props.showNumbers] - Whether to display numbers next to each list item.
 * @prop {Array} [props.items] - Array of item objects to render as list items.
 *
 * @returns {JSX.Element} The rendered ListGroup component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/list-group
 */
const ListGroup: FC<ILibListGroup> = ({
	className,
	element = "div",
	ref,
	children,
	title,
	noSeparator,
	showNumbers,
	items,
	...rest
}) => {
	const Element = element
	const listRef = useRef<HTMLDivElement>(null)

	return (
		<Element
			ref={useMergeRefs([ref, listRef])}
			className={clsx(
				"border border-gray-200 rounded-lg overflow-y-scroll",
				"list-group-container",
				className,
			)}
			{...rest}
		>
			{title && (
				<ListGroupTitle
					{...(title as any)}
					isFixed={typeof title === "object" ? title.isFixed : false}
					noSeparator={noSeparator}
					listRef={listRef}
					className={typeof title === "object" && title.className}
					ref={typeof title === "object" ? title.ref : null}
					shadow={
						typeof title === "object"
							? title.shadowOnScroll
							: undefined
					}
				>
					{typeof title === "object" ? title.text : title}
				</ListGroupTitle>
			)}

			{items
				? items.map((item, i) => (
						<ListGroupItem
							{...(item as any)}
							key={uuid()}
							title={item.title}
							number={showNumbers ? i + 1 : undefined}
							body={item.body}
							contentRight={item.contentRight}
							noSeparator={noSeparator}
						/>
					))
				: children}
		</Element>
	)
}

export default ListGroup
