import { type FC, type DragEvent } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibDragListItem } from "./types"

/**
 * DragListItem component for rendering individual draggable items within a drag list with drag handles and content.
 *
 * @component
 *
 * @example
 * <DragListItem
 *   item={{ id: "1", title: "Item Title", body: "Item description" }}
 *   index={0}
 *   handleDragStart={handleDragStart}
 *   handleDragOver={handleDragOver}
 *   iconDrag={<GripVertical />}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the drag list item.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the drag list item element.
 * @prop {React.ReactNode} [props.children] - Child components to render when not using item prop.
 * @prop {number} [props.index] - Index position of the item in the drag list.
 * @prop {React.ReactNode} [props.iconDrag=<BiDotsVerticalRounded size={24} />] - Icon to display as the drag handle.
 * @prop {function} [props.handleDragStart] - Function called when drag operation starts.
 * @prop {function} [props.handleDragOver] - Function called when dragging over this item.
 * @prop {object} [props.item] - Item object containing id, title, and body properties.
 * @prop {string} [props.id] - Unique identifier for the drag list item.
 * @prop {string} [props.iconLabel="Drag"] - Aria label for the drag handle button.
 *
 * @returns {JSX.Element} The rendered DragListItem component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/drag-list
 */
export const DragListItem: FC<ILibDragListItem> = ({
	className,
	element = "div",
	ref,
	children,
	index,
	iconDrag = <BiDotsVerticalRounded size={24} />,
	handleDragStart,
	handleDragOver,
	item,
	id,
	iconLabel = "Drag",
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex items-start gap-2 w-full cursor-grab active:cursor-grabbing",
				className,
			)}
			id={item?.id ?? id}
			draggable
			onDragStart={(e: DragEvent<HTMLDivElement>) =>
				handleDragStart(e, index)
			}
			onDragOver={(e: DragEvent<HTMLDivElement>) =>
				handleDragOver(e, index)
			}
		>
			<button
				role="button"
				aria-label={iconLabel}
				className="cursor-grab! active:cursor-grabbing"
			>
				{iconDrag}
			</button>

			<div className="flex flex-col gap-1 grow">
				{item ? (
					<>
						{typeof item.title === "string" ? (
							<Text tag="h6">{item.title}</Text>
						) : (
							item.title
						)}

						{item.body &&
							(typeof item.body === "string" ? (
								<Text>{item.body}</Text>
							) : (
								item.body
							))}
					</>
				) : (
					children
				)}
			</div>
		</Element>
	)
}
