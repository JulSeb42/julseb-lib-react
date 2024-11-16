/*=============================================== DragList types ===============================================*/

import type { DragEvent } from "react"
import type {
    LibComponentBase,
    LibDragListItem,
    LibIcon,
    LibSpacers,
    ReactChildren,
    ILibBorder,
    ILibPadding,
    ILibRadius,
    DispatchState,
} from "../../types"

/*====================== DragList ======================*/

interface ILibDragListBase extends LibComponentBase<HTMLDivElement> {
    iconDrag?: LibIcon
    iconDragSize?: number
    iconDragBaseUrl?: string
    gap?: LibSpacers
    border?: ILibBorder
    padding?: ILibPadding
    borderRadius?: ILibRadius
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

interface ILibDragListItemBase extends LibComponentBase<HTMLDivElement> {
    index: number
    iconDrag?: LibIcon
    iconDragSize?: number
    iconDragBaseUrl?: string
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
