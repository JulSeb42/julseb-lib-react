import type { DispatchState, LibComponentBase, ReactElement } from "../../types"

export interface ILibPaginator extends LibComponentBase<HTMLDivElement> {
	totalPages: number
	currentPage: number
	setCurrentPage: DispatchState<number>
	noInput?: boolean
	texts?: { page?: string; of?: string }
	icons?: { prev?: ReactElement; next?: ReactElement }
	labels?: { prev?: string; next?: string }
	hideButtonsTooltip?: boolean
	handlePrev?: () => void
	handleNext?: () => void
	handlePage?: (n: number) => void
	children?: never
}
