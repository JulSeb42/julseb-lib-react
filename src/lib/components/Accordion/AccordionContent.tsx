import { type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibAccordionContent } from "./subtypes"

/**
 * AccordionContent component for rendering the collapsible content area of accordion sections with smooth animations.
 *
 * @component
 *
 * @example
 * <AccordionContent
 *   variant="rounded"
 *   isOpen={isOpen}
 * >
 *   <p>This is the accordion content that can be expanded or collapsed.</p>
 * </AccordionContent>
 *
 * @extends ILibText
 *
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual style variant of the accordion content.
 * @prop {boolean} [props.isOpen] - Whether the accordion content is currently visible/expanded.
 *
 * @returns {JSX.Element} The rendered AccordionContent component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/accordion
 */
export const AccordionContent: FC<ILibAccordionContent> = ({
	element,
	ref,
	className,
	variant = "basic",
	isOpen,
	children,
	...rest
}) => {
	const Element = element ?? (typeof children === "string" ? Text : "div")

	return (
		<Element
			ref={ref}
			className={clsx(
				"overflow-hidden transition-all duration-200 ease",
				"py-0 max-h-0 opacity-0",
				variant === "rounded" && "px-2 bg-background",
				isOpen && "open py-2 max-h-auto opacity-100",
				"accordion-content",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
