import type {
	DispatchState,
	LibComponentBase,
	LibInputListDirection,
	LibShadows,
	LibDropdownItem,
	ReactChildren,
	LibRadiuses,
} from "../../types"

/*====================== Dropdown ======================*/

interface ILibDropdownBase extends LibComponentBase<HTMLDivElement> {
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
	direction?: LibInputListDirection
	shadow?: LibShadows
	borderRadius?: LibRadiuses
}

interface DropdownWithItems extends ILibDropdownBase {
	items?: Array<LibDropdownItem>
	children?: never
}

interface DropdownWithChildren extends ILibDropdownBase {
	items?: never
	children?: ReactChildren
}

export type ILibDropdown = DropdownWithItems | DropdownWithChildren

/*====================== DropdownItem ======================*/

export interface ILibDropdownItem extends LibComponentBase<HTMLButtonElement> {}
