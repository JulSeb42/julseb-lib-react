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
 * usePagination is a hook to handle pagination logic and URL query updates for paginated components.
 *
 * @function
 * @param {Object} params - Pagination parameters.
 * @param {number} params.currentPage - The current page number.
 * @param {DispatchState<number>} params.setCurrentPage - State setter for the current page.
 * @param {Array<Array<string>>} [params.queries] - Additional query parameters to include in the URL.
 * @param {number} [params.totalPages] - Total number of pages (used for bounds checking).
 * @returns {{ handlePrev: () => void, handleNext: () => void, handlePage: (n: number) => void }} Pagination handlers for previous, next, and specific page navigation.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#usePagination
 *
 * @example
 * const { handlePrev, handleNext, handlePage } = usePagination({
 *   currentPage,
 *   setCurrentPage,
 *   queries,
 *   totalPages
 * })
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
            { replace: true }
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
            { replace: true }
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
                { replace: true }
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
                { replace: true }
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
            { replace: true }
        )

        scrollToTop()
    }

    return { handlePrev, handleNext, handlePage }
}
