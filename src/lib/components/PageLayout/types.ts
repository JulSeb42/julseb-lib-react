import type { ReactChildren } from "../../types"
import type { ILibMeta } from "../Meta/types"
import type { ILibHeader } from "../Header/types"
import type { ILibWrapper } from "../Wrapper/types"
import type { ILibMain } from "../Main/types"
import type { ILibFooter } from "../Footer/types"

interface ILibPageLayoutBase {
	children?: ReactChildren
	meta?: ILibMeta
	header?: ILibHeader
	footer?: ILibFooter
}

interface PageLayoutWithWrapper extends ILibPageLayoutBase {
	noWrapper?: false | undefined
	wrapperProps?: Omit<ILibWrapper, "children">
	noMain?: boolean
	mainProps?: Omit<ILibMain, "children">
}

interface PageLayoutWithoutWrapper extends ILibPageLayoutBase {
	noWrapper?: true
	wrapperProps?: never
	noMain?: never
	mainProps?: never
}

export type ILibPageLayout = PageLayoutWithWrapper | PageLayoutWithoutWrapper
