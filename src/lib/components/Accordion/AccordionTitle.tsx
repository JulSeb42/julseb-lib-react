import { type FC } from "react"
import { BiPlus, BiChevronDown } from "react-icons/bi"
import { clsx, genRingColor, genTextColorHover } from "../../utils"
import type { ILibAccordionTitle } from "./subtypes"

/**
 * AccordionTitle component for rendering clickable headers in accordion sections with animated icons and customizable styling.
 *
 * @component
 *
 * @example
 * <AccordionTitle
 *   variant="rounded"
 *   icon="plus"
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 * >
 *   Section Title
 * </AccordionTitle>
 *
 * @extends ILibAccordionTitle
 *
 * @prop {"plus" | "chevron"} [props.icon="chevron"] - Type of icon to display for expand/collapse indicator.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual style variant of the accordion title.
 * @prop {boolean} [props.isOpen] - Whether the accordion section is currently expanded.
 * @prop {function} [props.setIsOpen] - Function to toggle the accordion section open/closed state.
 *
 * @returns {JSX.Element} The rendered AccordionTitle component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/accordion
 */
export const AccordionTitle: FC<ILibAccordionTitle> = ({
	ref,
	className,
	icon = "plus",
	variant = "basic",
	isOpen,
	setIsOpen,
	children,
	...rest
}) => {
	return (
		<button
			ref={ref}
			className={clsx(
				"flex justify-between items-center border-b outline-none w-full",
				variant === "rounded"
					? "bg-primary-500 text-white py-1 px-2 border-b-white"
					: [genTextColorHover["primary"], "border-b-gray-200 "],
				genRingColor["primary"],
				"accordion-title",
				className,
			)}
			onClick={() => setIsOpen(!isOpen)}
			{...rest}
		>
			<span className="accordion-title-content">{children}</span>

			{icon === "plus" ? (
				<BiPlus
					className={clsx(
						"transition-all duration-200 ease-in-out",
						isOpen && "open",
						"[&.open]:rotate-45",
						"accordion-title-icon",
					)}
				/>
			) : (
				<BiChevronDown
					className={clsx(
						"transition-all duration-200 ease-in-out",
						isOpen && "open",
						"[&.open]:rotate-180",
						"accordion-title-icon",
					)}
				/>
			)}
		</button>
	)
}
