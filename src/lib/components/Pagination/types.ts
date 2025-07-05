import type { ButtonHTMLAttributes } from "react"
import type {
	DispatchState,
	LibColorsHover,
	LibComponentBase,
	ReactChildren,
	ReactElement,
} from "../../types"

/*====================== Pagination ======================*/

interface ILibPaginationBase extends LibComponentBase<HTMLDivElement> {
	accentColor?: LibColorsHover
}

interface PaginationWithItems extends ILibPaginationBase {
	currentPage: number
	setCurrentPage: DispatchState<number>
	totalPages: number
	pageLimit?: number
	icons?: { prev?: ReactElement; next?: ReactElement }
	children?: never
}

interface PaginationWithChildren extends ILibPaginationBase {
	currentPage?: never
	setCurrentPage?: never
	totalPages?: never
	pageLimit?: never
	icons?: never
	children: ReactChildren
}

export type ILibPagination = PaginationWithItems | PaginationWithChildren

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
	readOnly: true
}

export type ILibPaginationButton =
	| PaginationButtonActive
	| PaginationButtonReadOnly
