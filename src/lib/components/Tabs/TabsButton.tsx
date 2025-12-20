import { type FC } from "react"
import { clsx, genRingColor } from "../../utils"
import type { ILibTabsButton } from "./types"

/**
 * TabsButton component for individual tab navigation buttons with active states and customizable styling.
 *
 * @component
 *
 * @example
 * <TabsButton
 *   isActive={activeTab === 'tab1'}
 *   onClick={() => setActiveTab('tab1')}
 *   variant="rounded"
 * >
 *   Tab 1
 * </TabsButton>
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tab button.
 * @prop {React.ElementType} [props.element="button"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the tab button element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the tab button.
 * @prop {"start" | "stretch"} [props.justify="start"] - Justification for positioning the button content.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual variant for styling the tab button.
 * @prop {boolean} [props.isActive] - Whether this tab button is currently active/selected.
 * @prop {function} [props.onClick] - Click handler function for tab selection.
 *
 * @returns {JSX.Element} The rendered TabsButton component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tabs
 */
export const TabsButton: FC<ILibTabsButton> = ({
	element = "button",
	ref,
	className,
	children,
	justify = "start",
	variant = "basic",
	isActive,
	onClick,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"outline-none",
				genRingColor["primary"],
				isActive && "active",
				variant === "basic" && [
					"text-left border-b border-b-transparent translate-y-px",
					"[&.active]:border-b-primary-500",
				],
				variant === "rounded" && [
					"rounded-md bg-transparent hover:bg-primary-300 active:bg-primary-600 hover:text-white py-1",
					"[&.active]:bg-primary-500 [&.active]:text-white",
				],
				justify === "start" && ["min-w-20"],
				justify === "stretch" && ["grow"],
				"tabs-button",
				className,
			)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</Element>
	)
}
