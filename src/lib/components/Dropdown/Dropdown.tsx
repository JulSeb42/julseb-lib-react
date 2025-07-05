import { useRef, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { useClickOutside, useMergeRefs } from "../../hooks"
import { DropdownItem } from "./DropdownItem"
import { clsx, genBorderRadius, genBoxShadow } from "../../utils"
import type { ILibDropdown } from "./types"

/**
 * Dropdown component for creating contextual menus and popover content with customizable positioning and animations.
 *
 * @component
 *
 * @example
 * <Dropdown
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   direction="down"
 *   shadow="lg"
 *   items={[
 *     { content: "Profile", onClick: handleProfile },
 *     { content: "Settings", onClick: handleSettings },
 *     { content: "Logout", onClick: handleLogout }
 *   ]}
 * />
 *
 * @extends ILibDropdown
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the dropdown container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.ReactNode} [props.children] - Child DropdownItem components to render when not using items prop.
 * @prop {boolean} [props.isOpen] - Whether the dropdown is currently visible.
 * @prop {function} [props.setIsOpen] - Function to control the dropdown open/closed state.
 * @prop {"up" | "down"} [props.direction="down"] - Direction for the dropdown to appear relative to its trigger.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none"} [props.shadow] - Shadow variant to apply when dropdown is open.
 * @prop {Array} [props.items] - Array of dropdown item objects with content and click handlers.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "full"} [props.borderRadius="md"] - Border radius size for the dropdown container.
 *
 * @returns {JSX.Element} The rendered Dropdown component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/dropdown
 */
export const Dropdown: FC<ILibDropdown> = ({
	className,
	element = "div",
	ref,
	children,
	isOpen,
	setIsOpen,
	direction = "down",
	shadow,
	items,
	borderRadius = "md",
	...rest
}) => {
	const Element = element
	const el = useRef<HTMLDivElement>(null)

	useClickOutside(el as any, () => {
		if (isOpen) setIsOpen(false)
	})

	return (
		<Element
			ref={useMergeRefs([ref, el])}
			className={clsx(
				"left-0 absolute flex flex-col bg-background overflow-hidden overflow-y-scroll transition-all duration-200 ease no-scrollbar",
				genBorderRadius[borderRadius],
				isOpen ? "max-h-100" : "max-h-0",
				direction === "down" ? "top-[40px]" : "bottom-[40px]",
				isOpen && shadow && genBoxShadow[shadow],
				className,
			)}
			{...rest}
		>
			{items?.map(item => (
				<DropdownItem
					{...(item as any)}
					key={uuid()}
					element={item.element ?? "button"}
					content={undefined}
				>
					{item.content}
				</DropdownItem>
			)) ?? children}
		</Element>
	)
}
