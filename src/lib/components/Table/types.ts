/*=============================================== Table types ===============================================*/

import type {
    LibComponentBase,
    LibTableVariant,
    ReactChildren,
    CssVerticalAlign,
} from "../../types"

interface ILibTableBase
    extends Exclude<LibComponentBase<HTMLTableElement>, "as"> {
    variant?: LibTableVariant
    vAlign?: CssVerticalAlign
    linkify?: boolean
    headers?: Array<string | JSX.Element>
}

interface TableWithData extends ILibTableBase {
    data: Array<Array<string | JSX.Element>>
    children?: never
}

interface TableWithChildren extends ILibTableBase {
    data?: never
    children?: ReactChildren
}

export type ILibTable = TableWithData | TableWithChildren
