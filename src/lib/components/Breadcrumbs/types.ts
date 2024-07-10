/*=============================================== Breadcrumbs types ===============================================*/

import type { ReactNode } from "react"
import type {
    LibAllColors,
    LibColorsHover,
    LibComponentBase,
    LibSpacers,
} from "../../types"

const separators = { slash: "slash", chevron: "chevron" } as const
export type BreadcrumbsSeparator = keyof typeof separators | JSX.Element

export interface BreadcrumbsProps extends LibComponentBase<HTMLDivElement> {
    linksColor?: LibColorsHover
    activeColor?: LibAllColors
    separatorColor?: LibAllColors
    gap?: LibSpacers
    separator?: BreadcrumbsSeparator
    children?: Array<ReactNode>
}
