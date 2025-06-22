import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"
import { scrollToTop } from "@julseb-lib/utils"
import type { DispatchState } from "../types"

interface ILibUsePaginationNavigation {
	currentPage: number
	setCurrentPage: DispatchState<number>
	queries?: Array<Array<string>>
	totalPages?: number
}

/**
 * @description Hook to use for building Pagination or Paginator buttons
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#usePagination
 * @prop currentPage: number
 * @prop setCurrentPage: Dispatch<SetStateAction<number>>
 * @prop queries?: Array<Array<string>>
 * @prop totalPages?: number
 */
export const usePagination = ({
	currentPage,
	setCurrentPage,
	queries,
	totalPages,
}: ILibUsePaginationNavigation) => {
	const [_, setSearchParams] = useSearchParams()

	const handlePrev = useCallback(() => {
		const newPage = currentPage - 1

		setCurrentPage(newPage)

		setSearchParams(
			queries
				? {
						page: newPage.toString(),
						...Object.fromEntries(queries),
					}
				: { page: newPage.toString() },
			{ replace: true },
		)

		scrollToTop()
	}, [currentPage, queries, setCurrentPage, setSearchParams])

	const handleNext = useCallback(() => {
		const newPage = currentPage + 1

		setCurrentPage(newPage)

		setSearchParams(
			queries
				? {
						page: newPage.toString(),
						...Object.fromEntries(queries),
					}
				: { page: newPage.toString() },
			{ replace: true },
		)

		scrollToTop()
	}, [currentPage, queries, setCurrentPage, setSearchParams])

	const handlePage = (n: number) => {
		if (n < 1) {
			setCurrentPage(1)
			setSearchParams(
				queries
					? {
							page: "1",
							...Object.fromEntries(queries),
						}
					: { page: "1" },
				{ replace: true },
			)
			return
		}

		if (totalPages && n > totalPages) {
			setCurrentPage(totalPages)
			setSearchParams(
				queries
					? {
							page: totalPages.toString(),
							...Object.fromEntries(queries),
						}
					: { page: totalPages.toString() },
				{ replace: true },
			)
			return
		}

		setCurrentPage(n)

		setSearchParams(
			queries
				? {
						page: n.toString(),
						...Object.fromEntries(queries),
					}
				: { page: n.toString() },
			{ replace: true },
		)

		scrollToTop()
	}

	return { handlePrev, handleNext, handlePage }
}
