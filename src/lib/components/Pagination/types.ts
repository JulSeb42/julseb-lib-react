/*=============================================== Pagination types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    ReactChildren,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

/*====================== Pagination ======================*/

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

/*====================== PaginationButton ======================*/

interface ILibPaginationButtonBase
    extends LibComponentBase<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: LibColorsHover
}

interface PaginationButtonActive extends ILibPaginationButtonBase {
    isActive: boolean
    readOnly?: never
}

interface PaginationButtonReadOnly extends ILibPaginationButtonBase {
    isActive?: never
    readOnly: boolean
}

export type ILibPaginationButton =
    | PaginationButtonActive
    | PaginationButtonReadOnly
