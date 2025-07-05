import type { ButtonHTMLAttributes, ElementType, RefObject } from "react"
import type { ClassNames, ReactChildren } from "./global"

/**
 * @description Base props for item components within lists and collections.
 *
 * @extends HTMLElement
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {string} [id] - Unique identifier for the item.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
 */
export interface LibItemBase<T> {
	element?: ElementType
	ref?: RefObject<T>
	id?: string
	className?: ClassNames
}

/**
 * @description Props for Button inside ButtonGroup.
 *
 * @extends HTMLButtonElement
 * @prop {JSX.Element} [content] - The content of the button
 * @prop {string} [id] - The id if the button.
 */
export type LibButtonGroupButtonItem = Omit<
	LibItemBase<HTMLButtonElement>,
	"content"
> &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "content"> & {
		id: string
		content: ReactChildren
		children?: never
	}

/**
 * @description Props for Item inside ListGroup.
 *
 * @extends HTMLDivElement
 * @prop {JSX.Element} [title] - The title of the item.
 * @prop {JSX.Element} [body] - The body text of the item.
 * @prop {JSX.Element} [contentRight] - The content on the right of the item.
 */
export type LibListGroupItem = LibItemBase<HTMLDivElement> & {
	title: ReactChildren
	body?: ReactChildren
	contentRight?: ReactChildren
}

/**
 * @description Props for Item inside Accordion.
 *
 * @extends HTMLDivElement
 * @prop {JSX.Element} [title] - The title of the item.
 * @prop {JSX.Element} [content] - The content of the item.
 * @prop {true | false} [defaultOpen] - Wether the item is open by default.
 */
export type LibAccordionItem = LibItemBase<HTMLDivElement> & {
	title: ReactChildren
	content: ReactChildren
	defaultOpen?: boolean
}

/**
 * @description Props for Item inside Dropdown.
 *
 * @extends HTMLButtonElement
 * @prop {JSX.Element} [content] - The content of the item.
 */
export type LibDropdownItem = Omit<LibItemBase<HTMLButtonElement>, "content"> &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "content"> & {
		content: ReactChildren
	}

/**
 * @description Props for Item inside DragList component.
 *
 * @extends HTMLDivElement
 * @prop {string} id - Unique identifier for the drag list item.
 * @prop {ReactChildren} title - The title content of the item.
 * @prop {ReactChildren} [body] - The body content of the item.
 */
export type LibDragListItem = LibItemBase<HTMLDivElement> & {
	id: string
	title: ReactChildren
	body?: ReactChildren
}
