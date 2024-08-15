/*=============================================== PageLayout types ===============================================*/

import type { ReactChildren, LibPageLayoutTemplate } from "../../types"
import type { ILibHelmet } from "../Helmet/types"
import type { ILibHeader } from "../Header/types"
import type { ILibWrapper } from "../Wrapper/types"
import type { ILibMain } from "../Main/types"
import type { ILibPageLoading } from "../PageLoading/types"
import type { ILibFooter } from "../Footer/types"

interface ILibPageLayoutBase {
    children?: ReactChildren
    isLoading?: boolean
    pageLoading?: ILibPageLoading
    titleLoading?: string
    helmet?: Omit<ILibHelmet, "children">
    header?: Omit<ILibHeader, "children">
    footer?: Omit<ILibFooter, "children">
}

interface PageLayoutWithWrapper extends ILibPageLayoutBase {
    noWrapper?: false
    wrapper?: Omit<ILibWrapper, "children">
}

interface PageLayoutWitouthWrapper extends ILibPageLayoutBase {
    noWrapper?: true
    wrapper?: never
}

type ILibPageLayoutWrapper = PageLayoutWithWrapper | PageLayoutWitouthWrapper

type PageLayoutWithSingleTemplate = ILibPageLayoutWrapper & {
    template?: Extract<LibPageLayoutTemplate, "single">
    main?: Omit<ILibMain, "children">
    mainMinHeight?: string | number
}

type PageLayoutWithMultiTemplate = ILibPageLayoutWrapper & {
    template?: Extract<LibPageLayoutTemplate, "multi">
    main?: never
    mainMinHeight?: never
}

export type ILibPageLayout =
    | PageLayoutWithSingleTemplate
    | PageLayoutWithMultiTemplate
