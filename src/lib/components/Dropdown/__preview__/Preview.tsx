import { useState, type FC } from "react"
import { Link } from "react-router-dom"
import { BiEnvelope } from "react-icons/bi"
import { clsx } from "../../../utils"
import { Dropdown } from "../Dropdown"
import { Button } from "../../Button"
import type { ILibDropdown } from "../types"
import type { LibDropdownItem } from "../../../types"

const items: Array<LibDropdownItem> = [
	{
		content: "Link",
		element: Link,
		// @ts-ignore
		to: "/",
	},
	{
		content: "Button",
		onClick: () => alert("Clicked"),
	},
	{
		content: (
			<>
				<BiEnvelope />
				Button with icon
			</>
		),
		onClick: () => alert("Clicked icon"),
	},
	{
		content: "Disabled",
		disabled: true,
		onClick: () => alert("This shouldn't work"),
	},
]

export const Preview: FC<Partial<ILibDropdown>> = props => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={clsx("relative", isOpen && "z-10")}>
			<Button onClick={() => setIsOpen(!isOpen)}>Open dropdown</Button>
			<Dropdown
				{...(props as any)}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				items={items}
				shadow="xl"
			/>
		</div>
	)
}
