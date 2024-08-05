/*=============================================== Pagination types ===============================================*/

import type { LibColorsHover, LibIcon, ReactChildren } from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

interface ILibPaginationBase extends ILibFlexbox {
    accentColor?: LibColorsHover
    queries?: Array<Array<string>>
}

interface ILibPaginationWithItems extends ILibPaginationBase {
    totalPages: number
    pageLimit?: number
    icons?: { previous?: LibIcon; next?: LibIcon }
    iconSizes?: { previous?: number; next?: number }
    iconBaseUrl?: string
    children?: never
}

interface ILibPaginationWithChildren extends ILibPaginationBase {
    totalPages?: never
    pageLimit?: never
    icons?: never
    iconSizes?: never
    iconBaseUrl?: never
    children?: ReactChildren
}

export type ILibPagination =
    | ILibPaginationWithItems
    | ILibPaginationWithChildren
