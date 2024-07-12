/*=============================================== ListGroup types ===============================================*/

import type {
    LibComponentBase,
    LibListGroupItem,
    ReactChildren,
} from "../../types"

interface ILibListGroupBase extends LibComponentBase<HTMLDivElement> {
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
