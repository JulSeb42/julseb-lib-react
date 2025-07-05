import { useState, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { TabsContainer } from "./TabsContainer"
import { TabsButtonsContainer } from "./TabsButtonsContainer"
import { TabsButton } from "./TabsButton"
import { TabsContent } from "./TabsContent"
import { clsx } from "../../utils"
import type { ILibTabs } from "./types"

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
*/
export const Tabs: FC<ILibTabs> = ({
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
			className={clsx("", className)}
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
