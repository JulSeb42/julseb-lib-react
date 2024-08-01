/*=============================================== ListGroup types ===============================================*/

import type { ForwardedRef, RefObject } from "react"
import type {
    LibAllColors,
    LibComponentBase,
    LibListGroupItem,
    LibShadows,
    ReactChildren,
    LibButtonLinkBlank,
    LibIcon,
} from "../../types"

/*====================== ListGroup ======================*/

interface ILibListGroupBase
    extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
    title?:
        | string
        | {
              text: string
              backgroundColor?: LibAllColors
              contentColor?: LibAllColors
              isFixed?: boolean
              id?: string
              className?: string
              ref?: ForwardedRef<HTMLDivElement>
              shadowOnScroll?: LibShadows
          }
    noSeparator?: boolean
    showNumbers?: boolean
    maxHeight?: number | string
}

interface ListGroupWithItems extends ILibListGroupBase {
    items: Array<LibListGroupItem>
    children?: never
}

interface ListGroupWithChildren extends ILibListGroupBase {
    items?: never
    children?: ReactChildren
}

export type ILibListGroup = ListGroupWithItems | ListGroupWithChildren

/*====================== ListGroupTitle ======================*/

interface ILibListGroupTitleBase extends LibComponentBase<HTMLDivElement> {
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
    noSeparator?: boolean
    isFixed?: boolean
}

interface ListGroupItemTitleWithShadow extends ILibListGroupTitleBase {
    shadowOnScroll?: LibShadows
    listRef: RefObject<HTMLDivElement>
}

interface ListGroupItemTitleWithoutShadow extends ILibListGroupTitleBase {
    shadowOnScroll?: null | false | undefined
    listRef?: never
}

export type ILibListGroupTitle =
    | ListGroupItemTitleWithShadow
    | ListGroupItemTitleWithoutShadow

/*====================== ListGroupItem ======================*/

type ListGroupItemBadgeBase = {
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

type ListGroupItemBadgeWithIcon = ListGroupItemBadgeBase & {
    icon?: LibIcon
    iconSize?: number
    number?: never
}

type ListGroupItemBadgeWithNumber = ListGroupItemBadgeBase & {
    icon?: never
    iconSize?: never
    number?: number
}

type ListGroupItemBadge =
    | ListGroupItemBadgeWithIcon
    | ListGroupItemBadgeWithNumber

type ILibListGroupItemBase = LibComponentBase<
    HTMLDivElement & HTMLButtonElement & HTMLAnchorElement
> &
    LibButtonLinkBlank & {
        text: string
        subtext?: string
        isInArray?: boolean
        noSeparator?: boolean
        number?: number
    }

type ListGroupItemWithBadge = ILibListGroupItemBase & {
    badge?: boolean | ListGroupItemBadge
    date?: never
}

type ListGroupItemWithDate = ILibListGroupItemBase & {
    badge?: never
    date?: string | Date
}

export type ILibListGroupItem = ListGroupItemWithBadge | ListGroupItemWithDate
