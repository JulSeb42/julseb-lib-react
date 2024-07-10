/*=============================================== Pagination types ===============================================*/

import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    ReactChildren,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

interface PaginationPropsBase
    extends LibComponentBase<HTMLDivElement>,
        FlexboxProps {
    accentColor?: LibColorsHover
    queries?: Array<Array<string>>
}

interface PaginationPropsWithItems extends PaginationPropsBase {
    totalPages: number
    pageLimit?: number
    icons?: { previous?: LibIcon; next?: LibIcon }
    iconSizes?: { previous?: number; next?: number }
    children?: never
}

interface PaginationPropsWithChildren extends PaginationPropsBase {
    totalPages?: never
    pageLimit?: never
    icons?: never
    iconSizes?: never
    children: ReactChildren
}

export type PaginationProps =
    | PaginationPropsWithItems
    | PaginationPropsWithChildren
