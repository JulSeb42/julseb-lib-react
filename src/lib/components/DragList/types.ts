import type { DragEvent } from "react"
import type {
	LibComponentBase,
	ReactElement,
	LibRadiuses,
	LibDragListItem,
	DispatchState,
	ReactChildren,
} from "../../types"

/*====================== Draglist ======================*/

interface ILibDragListBase extends LibComponentBase<HTMLDivElement> {
	iconDrag?: ReactElement
	borderRadius?: LibRadiuses
}

interface DragListWithItems extends ILibDragListBase {
	items: Array<LibDragListItem>
	setItems: DispatchState<Array<LibDragListItem>>
	hideSeparator?: boolean
	children?: never
}

interface DragListWithChildren extends ILibDragListBase {
	items?: never
	setItems?: never
	hideSeparator?: never
	children?: ReactChildren
}

export type ILibDragList = DragListWithItems | DragListWithChildren

/*====================== DragListItem ======================*/

interface ILibDragListItemBase
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	index: number
	iconDrag?: ReactElement
	iconLabel?: string
	handleDragStart: (e: DragEvent<HTMLDivElement>, i: number) => void
	handleDragOver: (e: DragEvent<HTMLDivElement>, i: number) => void
}

interface DragListItemWithItem extends ILibDragListItemBase {
	item: LibDragListItem
	children?: never
}

interface DragListItemWithChildren extends ILibDragListItemBase {
	item?: never
	children?: ReactChildren
}

export type ILibDragListItem = DragListItemWithItem | DragListItemWithChildren
