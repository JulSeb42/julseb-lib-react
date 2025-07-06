import type {
	LibComponentBase,
	LibTableVariant,
	CssVerticalAlign,
	ReactChildren,
	CssTextAlign,
} from "../../types"

/*====================== Table ======================*/

interface ILibTableBase
	extends Omit<LibComponentBase<HTMLTableElement>, "element"> {
	variant?: LibTableVariant
	vAlign?: CssVerticalAlign
	textAlign?: CssTextAlign
	headers?: Array<ReactChildren>
	footers?: Array<ReactChildren>
}

interface TableWithData extends ILibTableBase {
	headers: Array<ReactChildren>
	data: Array<Array<ReactChildren>>
	children?: never
}

interface TableWithChildren extends ILibTableBase {
	data?: never
	children?: ReactChildren
}

type ILibTableContent = TableWithData | TableWithChildren

type TableWithLinkify = ILibTableContent & {
	linkify?: boolean
	blank?: boolean
}

type TableWithoutLinkify = ILibTableContent & {
	linkify?: undefined | false
	blank?: never
}

export type ILibTable = TableWithLinkify | TableWithoutLinkify
