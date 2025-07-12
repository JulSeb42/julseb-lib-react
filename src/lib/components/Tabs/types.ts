import type { ButtonHTMLAttributes, MouseEventHandler } from "react"
import type {
	LibComponentBase,
	LibTabItem,
	LibTabsJustify,
	LibTabsVariant,
} from "../../types"

/*====================== Tabs container ======================*/

export interface ILibTabsContainer extends LibComponentBase<HTMLDivElement> {}

/*====================== Tabs buttons container ======================*/

export interface ILibTabsButtonsContainer
	extends LibComponentBase<HTMLDivElement> {
	justify?: LibTabsJustify
	variant?: LibTabsVariant
}

/*====================== Tabs Button ======================*/

export interface ILibTabsButton
	extends LibComponentBase<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	isActive: boolean
	onClick: MouseEventHandler<HTMLButtonElement>
	justify?: LibTabsJustify
	variant?: LibTabsVariant
}

/*====================== Tab content ======================*/

export interface ILibTabContent extends LibComponentBase<HTMLDivElement> {
	isActive: boolean
}

/*====================== Tabs ======================*/

export interface ILibTabs extends LibComponentBase<HTMLDivElement> {
	items: Array<LibTabItem>
	justify?: LibTabsJustify
	variant?: LibTabsVariant
	activeTab?: number
	children?: never
}
