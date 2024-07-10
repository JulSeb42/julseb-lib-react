/*=============================================== Breadcrumbs types ===============================================*/

import type { ReactNode } from "react"
import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    LibSpacers,
    LibBreadcrumbSeparator,
} from "../../types"

export interface BreadcrumbsProps extends LibComponentBase<HTMLDivElement> {
    linksColor?: LibColorsHover
    activeColor?: LibAllColors
    separatorColor?: LibAllColors
    gap?: LibSpacers
    separator?: LibBreadcrumbSeparator
    children?: Array<ReactNode>
}
