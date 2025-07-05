import { type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibTabContent } from "./types"

/**
 * TabsContent component for displaying individual tab panel content with conditional rendering based on active state.
 *
 * @component
 *
 * @example
 * <TabsContent isActive={activeTab === 'tab1'}>
 *   <h3>Tab 1 Content</h3>
 *   <p>This is the content for the first tab.</p>
 * </TabsContent>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tab content container.
 * @prop {React.ElementType} [props.element] - HTML element type to render as the container. Defaults to Text if children is string, otherwise "div".
 * @prop {React.Ref<any>} [props.ref] - Ref to the tab content element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the tab panel.
 * @prop {boolean} [props.isActive] - Whether this tab content is currently active/visible.
 *
 * @returns {JSX.Element} The rendered TabsContent component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tabs
 */
export const TabsContent: FC<ILibTabContent> = ({
	children,
	element = typeof children === "string" ? Text : "div",
	ref,
	className,
	isActive,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(isActive ? "visible" : "hidden", className)}
			{...rest}
		>
			{children}
		</Element>
	)
}
