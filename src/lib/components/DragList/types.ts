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
    /**
     * @description Props for DragList item: https://documentation-components-react.vercel.app/components/drag-list
     * @prop data-testid?: string
     * @prop className?: string
     * @prop id: string
     * @prop ref?: ForwardedRef<HTMLDivElement>
     * @prop title: string => only if element is not defined
     * @prop body?: string => only if element is not defined
     * @prop badge?: boolean | ListGroupItemBadgeExtended => only if element and date are not defined
     * @prop date?: string | Date => only if element and badge are not defined
     * @prop element?: JSX.ELement => only if title and other props are not defined
     */
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
    /**
     * @description Props for DragList item: https://documentation-components-react.vercel.app/components/drag-list
     * @prop data-testid?: string
     * @prop className?: string
     * @prop id: string
     * @prop ref?: ForwardedRef<HTMLDivElement>
     * @prop title: string => only if element is not defined
     * @prop body?: string => only if element is not defined
     * @prop badge?: boolean | ListGroupItemBadgeExtended => only if element and date are not defined
     * @prop date?: string | Date => only if element and badge are not defined
     * @prop element?: JSX.ELement => only if title and other props are not defined
     */
    item: LibDragListItem
    children?: never
}

interface DragListItemWithChildren extends ILibDragListItemBase {
    item?: never
    children?: ReactChildren
}

export type ILibDragListItem = DragListItemWithItem | DragListItemWithChildren
