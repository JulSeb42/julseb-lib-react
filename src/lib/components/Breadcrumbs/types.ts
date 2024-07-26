/*=============================================== Breadcrumbs types ===============================================*/

import type { ReactNode } from "react"
import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    LibSpacers,
    LibBreadcrumbSeparator,
    LibBreadcrumbItem,
} from "../../types"

interface ILibBreadcrumbsBase extends LibComponentBase<HTMLDivElement> {
    linksColor?: LibColorsHover
    activeColor?: LibAllColors
    separatorColor?: LibAllColors
    gap?: LibSpacers
    separator?: LibBreadcrumbSeparator
}

interface BreadcrumbsWithItems extends ILibBreadcrumbsBase {
    breadcrumbsItems: Array<LibBreadcrumbItem>
    children?: never
}

interface BreadcrumbsWithChildren extends ILibBreadcrumbsBase {
    breadcrumbsItems?: never
    children?: Array<ReactNode>
}

export type ILibBreadcrumbs = BreadcrumbsWithItems | BreadcrumbsWithChildren
