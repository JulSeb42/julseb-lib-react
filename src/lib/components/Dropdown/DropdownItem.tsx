import { type FC } from "react"
import { clsx } from "../../utils"
import type { ILibDropdownItem } from "./types"

/**
 * DropdownItem component for rendering individual items within dropdown menus with hover states and customizable content.
 *
 * @component
 *
 * @example
 * <DropdownItem onClick={handleClick}>
 *   Menu Item
 * </DropdownItem>
 * <DropdownItem element="a" href="/profile">
 *   Profile
 * </DropdownItem>
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the dropdown item.
 * @prop {React.ElementType} [props.element="button"] - HTML element type to render as the item container.
 * @prop {React.ReactNode} [props.children] - Content to display inside the dropdown item.
 *
 * @returns {JSX.Element} The rendered DropdownItem component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/dropdown
 */
export const DropdownItem: FC<ILibDropdownItem> = ({
	element = "button",
	children,
	className,
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				"inline-flex items-center gap-2 bg-background hover:bg-primary-300 active:bg-primary-600 disabled:hover:bg-background p-2 min-w-[300px] font-bold text-primary-500 disabled:text-gray-500",
				"dropdown-item",
				className,
			)}
			content={undefined}
			{...rest}
		>
			{children}
		</Element>
	)
}
