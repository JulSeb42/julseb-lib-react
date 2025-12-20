import { type FC } from "react"
import { clsx } from "../../utils"
import type { ILibTabsButtonsContainer } from "./types"

/**
 * TabsButtonsContainer component for wrapping tab navigation buttons with customizable layout and styling.
 *
 * @component
 *
 * @example
 * <TabsButtonsContainer justify="stretch" variant="rounded">
 *   <TabsButton>Tab 1</TabsButton>
 *   <TabsButton>Tab 2</TabsButton>
 *   <TabsButton>Tab 3</TabsButton>
 * </TabsButtonsContainer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tabs buttons container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the tabs buttons container element.
 * @prop {React.ReactNode} [props.children] - Child components (typically TabsButton components).
 * @prop {"start" | "stretch"} [props.justify="start"] - Justification for positioning tabs within their container.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual variant for styling the tab buttons.
 *
 * @returns {JSX.Element} The rendered TabsButtonsContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tabs
 */
export const TabsButtonsContainer: FC<ILibTabsButtonsContainer> = ({
	element = "div",
	ref,
	className,
	children,
	justify = "start",
	variant = "basic",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex gap-2",
				variant === "basic" && "border-b border-b-gray-200",
				variant === "rounded" && "bg-gray-200 rounded-md p-2",
				justify === "start" && "justify-start",
				justify === "stretch" && "justify-stretch",
				"tabs-buttons-container",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
