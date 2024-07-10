/*=============================================== usePaginatedData ===============================================*/

import { useSearchParams } from "react-router-dom"

/**
 * @description Hook to use with Pagination or Paginator components
 * @link https://documentation-components-react.vercel.app/helpers/hooks#usePaginatedData
 * @prop data: Array<T> => to define
 * @prop defaultLimit?: number
 */

export function usePaginatedData<T>(
    data: Array<T>,
    defaultLimit = 20
): { paginatedData: Array<T>; totalPages: number } {
    const [query] = useSearchParams()
    const page = query.get("page") || 1
    const currentPage: number =
        typeof page === "string" ? parseInt(page) : page || 1

    const getPaginatedData = () => {
        const startIndex = currentPage * defaultLimit - defaultLimit
        const endIndex = startIndex + defaultLimit
        return data?.slice(startIndex, endIndex)
    }

    const getNumberOfPages = () => Math.ceil((data?.length || 0) / defaultLimit)

    return {
        paginatedData: getPaginatedData(),
        totalPages: getNumberOfPages(),
    }
}
