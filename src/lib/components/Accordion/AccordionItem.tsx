import { useState, type FC } from "react"
import { AccordionTitle } from "./AccordionTitle"
import { AccordionContent } from "./AccordionContent"
import { clsx } from "../../utils"
import type { ILibAccordionItem } from "./types"

/**
 * AccordionItem component for creating individual collapsible sections with title, content, and customizable styling.
 *
 * @component
 *
 * @example
 * <AccordionItem
 *   title="Section Title"
 *   icon="plus"
 *   variant="rounded"
 *   defaultOpen={false}
 * >
 *   <p>This is the accordion content that can be expanded or collapsed.</p>
 * </AccordionItem>
 *
 * @extends HTMLDivElement
 *
 * @prop {React.ReactNode} [props.title] - Title content to display in the accordion header.
 * @prop {"plus" | "chevron"} [props.icon="chevron"] - Type of icon to display for expand/collapse indicator.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual style variant of the accordion item.
 * @prop {boolean} [props.defaultOpen=false] - Whether the accordion should be open by default.
 *
 * @returns {JSX.Element} The rendered AccordionItem component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/accordion
 */
export const AccordionItem: FC<ILibAccordionItem> = ({
	element = "div",
	title,
	children,
	icon = "plus",
	variant,
	defaultOpen = false,
	className,
	...rest
}) => {
	const Element = element

	const [isOpen, setIsOpen] = useState(defaultOpen)

	return (
		<Element
			className={clsx("flex flex-col", "accordion-item", className)}
			{...rest}
		>
			<AccordionTitle
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				icon={icon}
				variant={variant}
			>
				{title}
			</AccordionTitle>

			<AccordionContent variant={variant} isOpen={isOpen}>
				{children}
			</AccordionContent>
		</Element>
	)
}
