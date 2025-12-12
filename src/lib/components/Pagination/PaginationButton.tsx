import { type FC } from "react"
import { clsx, genBgColorHover, genTextColorHover } from "../../utils"
import type { ILibPaginationButton } from "./types"

/**
 * PaginationButton component for rendering individual page navigation buttons with active states and styling.
 *
 * @component
 *
 * @example
 * <PaginationButton
 *   accentColor="primary"
 *   isActive={currentPage === 5}
 *   onClick={() => handlePage(5)}
 * >
 *   5
 * </PaginationButton>
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the pagination button.
 * @prop {React.ElementType} [props.element="button"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the pagination button element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the button (usually page number).
 * @prop {LibAllColors} [props.accentColor="primary"] - Color theme for active and hover states.
 * @prop {boolean} [props.isActive] - Whether this button represents the current active page.
 * @prop {boolean} [props.readOnly] - Whether the button is in read-only mode (non-interactive).
 *
 * @returns {JSX.Element} The rendered PaginationButton component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/pagination
 */
const PaginationButton: FC<ILibPaginationButton> = ({
	className,
	element = "button",
	ref,
	children,
	accentColor = "primary",
	isActive,
	readOnly,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex justify-center items-center rounded-full size-8 font-bold",
				"disabled:text-gray-500",
				readOnly && "readOnly",
				isActive && "active",
				!readOnly && !isActive && genTextColorHover[accentColor],
				!readOnly &&
					isActive && [genBgColorHover[accentColor], "text-white"],
				"[&.readOnly]:cursor-default!",
				"pagination-button",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

export default PaginationButton
