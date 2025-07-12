import { type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import { AccordionItem } from "./AccordionItem"
import type { ILibAccordion } from "./types"

/**
 * Accordion component for creating collapsible content sections with customizable styling and expandable items.
 *
 * @component
 *
 * @example
 * <Accordion
 *   variant="rounded"
 *   icon="plus"
 *   items={[
 *     { title: "Section 1", content: <p>Content 1</p>, defaultOpen: true },
 *     { title: "Section 2", content: <p>Content 2</p> }
 *   ]}
 * />
 *
 * @extends ILibAccordion
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the accordion container.
 * @prop {React.ReactNode} [props.children] - Child AccordionItem components to render when not using items prop.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the accordion container element.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual style variant of the accordion.
 * @prop {"plus" | "chevron"} [props.icon="plus"] - Type of icon to display for expand/collapse indicators.
 * @prop {Array} [props.items] - Array of accordion items with title, content, and defaultOpen properties.
 *
 * @returns {JSX.Element} The rendered Accordion component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/accordion
 */
export const Accordion: FC<ILibAccordion> = ({
	className,
	element = "div",
	ref,
	children,
	variant = "basic",
	icon = "plus",
	items,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col",
				variant === "rounded"
					? "rounded-md overflow-hidden border border-gray-200"
					: "gap-2",
				"accordion",
				className,
			)}
			{...rest}
		>
			{items?.map(item => (
				<AccordionItem
					key={uuid()}
					icon={icon}
					variant={variant}
					title={item.title}
					defaultOpen={item.defaultOpen}
				>
					{item.content}
				</AccordionItem>
			)) ?? children}
		</Element>
	)
}
