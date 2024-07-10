/*=============================================== ListGroup types ===============================================*/

import type {
    LibComponentBase,
    LibListGroupItem,
    ReactChildren,
} from "../../types"

interface ListGroupPropsBase extends LibComponentBase<HTMLDivElement> {
    showNumbers?: boolean
    maxHeight?: number | string
}

interface ListGroupPropsWithItems extends ListGroupPropsBase {
    items: Array<LibListGroupItem>
    children?: never
}

interface ListGroupPropsWithChildren extends ListGroupPropsBase {
    items?: never
    children?: ReactChildren
}

export type ListGroupProps =
    | ListGroupPropsWithItems
    | ListGroupPropsWithChildren
