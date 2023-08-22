/*=============================================== usePaginatedData ===============================================*/

import { useSearchParams } from "react-router-dom"

export function usePaginatedData(
    data: any[],
    defaultLimit = 20
): { paginatedData: any[]; totalPages: number } {
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
