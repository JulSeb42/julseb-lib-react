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
    headers?: Array<ReactChildren>
}

interface TableWithData extends ILibTableBase {
    data: Array<Array<ReactChildren>>
    children?: never
}

interface TableWithChildren extends ILibTableBase {
    data?: never
    children?: ReactChildren
}

export type ILibTable = TableWithData | TableWithChildren

export interface ILibTBody
    extends Exclude<LibComponentBase<HTMLTableSectionElement>, "as"> {}

export interface ILibTHead
    extends Exclude<LibComponentBase<HTMLTableSectionElement>, "as"> {}

export interface ILibTr
    extends Exclude<LibComponentBase<HTMLTableRowElement>, "as"> {}

export interface ILibTd
    extends Exclude<LibComponentBase<HTMLTableCellElement>, "as"> {
    noPadding?: boolean
}
