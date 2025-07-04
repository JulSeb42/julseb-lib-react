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
	element = Text,
	ref,
	className,
	variant = "basic",
	isOpen,
	children,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"overflow-hidden transition-all duration-200 ease",
				variant === "rounded" && "px-2",
				isOpen ? "py-2 max-h-auto" : "py-0 max-h-0 opacity-0",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
