import { useRef, useState, Fragment, type FC, type DragEvent } from "react"
import { Hr } from "../Hr"
import { DragListItem } from "./DragListItem"
import { clsx } from "../../utils"
import type { ILibDragList } from "./types"

/**
 * DragList component for creating draggable and reorderable lists with customizable items and separators.
 *
 * @component
 *
 * @example
 * <DragList
 *   items={dragItems}
 *   setItems={setDragItems}
 *   iconDrag={<GripVertical />}
 *   hideSeparator={false}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the drag list container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the drag list element.
 * @prop {React.ReactNode} [props.children] - Child components to render when not using items prop.
 * @prop {React.ReactNode} [props.iconDrag] - Icon to display as the drag handle for each item.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "full"} [props.borderRadius] - Border radius size for the drag list container.
 * @prop {Array} [props.items] - Array of draggable items with id, title, and body properties.
 * @prop {function} [props.setItems] - Function to update the items array when items are reordered.
 * @prop {boolean} [props.hideSeparator] - Whether to hide separators between draggable items.
 *
 * @returns {JSX.Element} The rendered DragList component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/drag-list
 */
export const DragList: FC<ILibDragList> = ({
	className,
	element = "div",
	ref,
	children,
	iconDrag,
	borderRadius,
	items,
	setItems,
	hideSeparator,
	...rest
}) => {
	const Element = element

	const [dragIndex, setDragIndex] = useState(-1)
	const dragNode = useRef<HTMLDivElement>(null)

	const handleDragStart = (e: DragEvent<HTMLDivElement>, i: number) => {
		const { target } = e
		setDragIndex(i)

		if (dragNode && dragNode.current) {
			dragNode.current = target as HTMLDivElement
			e.dataTransfer.effectAllowed = "move"

			if (target instanceof HTMLElement) {
				e.dataTransfer.setData("text/html", target.outerHTML)
			}
		}
	}

	const handleDragOver = (e: DragEvent<HTMLDivElement>, i: number) => {
		e.preventDefault()

		if (dragNode.current !== e.target && items) {
			const newItems = [...items]
			newItems.splice(i, 0, newItems.splice(dragIndex, 1)[0])
			setDragIndex(i)
			setItems(newItems)
		}
	}

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col items-stretch gap-3 p-3 border border-gray-200 rounded-md w-full",
				"drag-list",
				className,
			)}
			{...rest}
		>
			{items
				? items.map((item, i) => (
						<Fragment key={item.id}>
							<DragListItem
								{...item}
								key={item.id}
								item={item}
								id={item.id}
								index={i}
								handleDragStart={handleDragStart}
								handleDragOver={handleDragOver}
								iconDrag={iconDrag}
								className={clsx(item.className)}
							/>

							{!hideSeparator && i !== items.length - 1 && (
								<Hr className="drag-list-separator" />
							)}
						</Fragment>
					))
				: children}
		</Element>
	)
}
