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
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
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
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {string} [id] - Unique identifier for the item.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
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
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {string} [id] - Unique identifier for the item.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
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
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {string} [id] - Unique identifier for the item.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
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
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
 * @prop {string} id - Unique identifier for the drag list item.
 * @prop {ReactChildren} title - The title content of the item.
 * @prop {ReactChildren} [body] - The body content of the item.
 */
export type LibDragListItem = LibItemBase<HTMLDivElement> & {
	id: string
	title: ReactChildren
	body?: ReactChildren
}

/**
 * @description Props for Item inside Tabs component.
 *
 * @extends HTMLDivElement
 * @prop {ElementType} [element] - HTML element type to render as the container.
 * @prop {RefObject<T>} [ref] - Ref to the item element.
 * @prop {string} [id] - Unique identifier for the item.
 * @prop {ClassNames} [className] - Additional CSS classes to apply to the item.
 * @prop {ReactChildren} title - The title/label of the tab item displayed in the tab header.
 * @prop {ReactChildren} content - The content of the tab item displayed in the tab panel.
 */
export type LibTabItem = LibItemBase<HTMLDivElement> & {
	title: ReactChildren
	content: ReactChildren
}

/**
 * @description Configuration options for controlling which buttons and features are available in the markdown editor toolbar.
 * @type {object}
 * @example
 * options={{
 *   titles: true,
 *   bold: true,
 *   italic: true,
 *   strikethrough: false,
 *   underline: false,
 *   ul: true,
 *   ol: true,
 *   link: true,
 *   quote: true,
 *   hr: false,
 *   code: true,
 *   codeBlock: true,
 *   comment: false,
 *   image: true,
 *   editorCode: true,
 *   editorLive: true,
 *   editorPreview: true
 * }}
 *
 * @prop {boolean} [titles] - Enable/disable titles formatting buttons (H1-H6).
 * @prop {boolean} [bold] - Enable/disable bold formatting button.
 * @prop {boolean} [italic] - Enable/disable italic formatting button.
 * @prop {boolean} [strikethrough] - Enable/disable strikethrough formatting button.
 * @prop {boolean} [underline] - Enable/disable underline formatting button.
 * @prop {boolean} [ul] - Enable/disable unordered list button.
 * @prop {boolean} [ol] - Enable/disable ordered list button.
 * @prop {boolean} [link] - Enable/disable link insertion button.
 * @prop {boolean} [quote] - Enable/disable blockquote button.
 * @prop {boolean} [hr] - Enable/disable horizontal rule button.
 * @prop {boolean} [code] - Enable/disable inline code button.
 * @prop {boolean} [codeBlock] - Enable/disable code block button.
 * @prop {boolean} [comment] - Enable/disable comment button.
 * @prop {boolean} [image] - Enable/disable image insertion button.
 * @prop {boolean} [editorCode] - Enable/disable code view toggle button.
 * @prop {boolean} [editorLive] - Enable/disable live view toggle button.
 * @prop {boolean} [editorPreview] - Enable/disable preview view toggle button.
 */
export type LibMdEditorOptions = {
	titles?: boolean
	bold?: boolean
	italic?: boolean
	strikethrough?: boolean
	underline?: boolean
	ul?: boolean
	ol?: boolean
	link?: boolean
	quote?: boolean
	hr?: boolean
	code?: boolean
	codeBlock?: boolean
	comment?: boolean
	image?: boolean
	viewCode?: boolean
	viewLive?: boolean
	viewPreview?: boolean
}
