import { useState, lazy, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import type { ILibTabs } from "./types"

const TabsContainer = lazy(() => import("./TabsContainer"))
const TabsButtonsContainer = lazy(() => import("./TabsButtonsContainer"))
const TabsButton = lazy(() => import("./TabsButton"))
const TabsContent = lazy(() => import("./TabsContent"))

/**
 * Tabs component for creating tabbed interfaces with automatic state management and customizable styling.
 *
 * @component
 *
 * @example
 * const tabItems = [
 *   { title: "Tab 1", content: "Content for tab 1" },
 *   { title: "Tab 2", content: "Content for tab 2" },
 *   { title: "Tab 3", content: "Content for tab 3" }
 * ]
 *
 * <Tabs
 *   items={tabItems}
 *   justify="stretch"
 *   variant="rounded"
 *   activeTab={0}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tabs container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the tabs container element.
 * @prop {Array<LibTabItem>} [props.items] - Array of tab items containing title and content for each tab.
 * @prop {"start" | "stretch"} [props.justify="start"] - Justification for positioning tabs within their container.
 * @prop {"basic" | "rounded"} [props.variant="basic"] - Visual variant for styling the tab buttons.
 * @prop {number} [props.activeTab=0] - Index of the initially active tab.
 *
 * @returns {JSX.Element} The rendered Tabs component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tabs
 */
const Tabs: FC<ILibTabs> = ({
	className,
	element = "div",
	ref,
	items,
	justify = "start",
	variant = "basic",
	activeTab = 0,
	...rest
}) => {
	const [tab, setTab] = useState(activeTab)

	return (
		<TabsContainer
			element={element}
			ref={ref}
			className={clsx(className)}
			{...rest}
		>
			<TabsButtonsContainer justify={justify} variant={variant}>
				{items?.map((item, i) => (
					<TabsButton
						{...(item as any)}
						key={item.id ?? uuid()}
						isActive={tab === i}
						onClick={() => setTab(i)}
						variant={variant}
						justify={justify}
					>
						{item.title}
					</TabsButton>
				))}
			</TabsButtonsContainer>

			{items?.map((item, i) => (
				<TabsContent
					{...(item as any)}
					key={uuid()}
					isActive={tab === i}
				>
					{item.content}
				</TabsContent>
			))}
		</TabsContainer>
	)
}
export default Tabs
