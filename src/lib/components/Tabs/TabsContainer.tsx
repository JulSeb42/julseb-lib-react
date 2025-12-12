import { type FC } from "react"
import { clsx } from "../../utils"
import type { ILibTabsContainer } from "./types"

/**
 * TabsContainer component for wrapping tab navigation and content panels with customizable styling.
 *
 * @component
 *
 * @example
 * <TabsContainer>
 *   <TabsButtonsContainer>
 *     <TabsButton>Tab 1</TabsButton>
 *     <TabsButton>Tab 2</TabsButton>
 *   </TabsButtonsContainer>
 *   <TabsContent>Content 1</TabsContent>
 *   <TabsContent>Content 2</TabsContent>
 * </TabsContainer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tabs container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the tabs container element.
 * @prop {React.ReactNode} [props.children] - Child components (typically TabsNav and TabsContent).
 *
 * @returns {JSX.Element} The rendered TabsContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tabs
 */
const TabsContainer: FC<ILibTabsContainer> = ({
	element = "div",
	ref,
	className,
	children,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx("flex flex-col gap-4", "tabs-container", className)}
			{...rest}
		>
			{children}
		</Element>
	)
}

export default TabsContainer
