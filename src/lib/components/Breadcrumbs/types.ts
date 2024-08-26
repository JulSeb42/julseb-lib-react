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
    items: Array<LibBreadcrumbItem>
    children?: never
}

interface BreadcrumbsWithChildren extends ILibBreadcrumbsBase {
    items?: never
    children?: Array<ReactNode>
}

export type ILibBreadcrumbs = BreadcrumbsWithItems | BreadcrumbsWithChildren
