import type {
	LibAllColors,
	LibComponentBase,
	LibFooterDirection,
	LibFooterLinksSeparator,
	ReactChildren,
	RequireAtLeastOne,
} from "../../types"

interface ILibFooterBase extends LibComponentBase<HTMLDivElement> {
	hideSeparator?: boolean
	hideLinksSeparator?: boolean
	linksSeparator?: LibFooterLinksSeparator
	linksSeparatorColor?: LibAllColors
}

interface FooterHorizontalWithItems extends ILibFooterBase {
	items: Array<ReactChildren>
	logo: ReactChildren
	direction?: Extract<LibFooterDirection, "horizontal">
	children?: never
}

interface FooterHorizontalWithChildren extends ILibFooterBase {
	items?: never
	logo: ReactChildren
	direction?: Extract<LibFooterDirection, "horizontal">
	children?: ReactChildren
}

type ILibFooterHorizontal =
	| FooterHorizontalWithItems
	| FooterHorizontalWithChildren

interface FooterVerticalWithItems extends ILibFooterBase {
	items?: Array<ReactChildren>
	logo?: ReactChildren
	direction?: Extract<LibFooterDirection, "vertical">
	children?: never
}

interface FooterVerticalWithChildren extends ILibFooterBase {
	items?: never
	logo?: ReactChildren
	direction?: Extract<LibFooterDirection, "vertical">
	children?: ReactChildren
}

type ILibFooterVertical = RequireAtLeastOne<
	FooterVerticalWithItems | FooterVerticalWithChildren,
	"items" | "children" | "logo"
>

export type ILibFooter = ILibFooterHorizontal | ILibFooterVertical
