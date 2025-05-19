import { useSearchParams } from "react-router-dom"

interface IUsePaginatedData<T> {
    paginatedData: Array<T>
    totalPages: number
}

/**
 * usePaginatedData is a hook to paginate an array of data, returning the current page's data and total number of pages.
 *
 * @function
 * @template T
 * @param {Array<T>} data - The array of data to paginate.
 * @param {number} [defaultLimit=20] - The number of items per page.
 * @returns {{ paginatedData: Array<T>, totalPages: number }} An object containing the paginated data and total number of pages.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#usePaginatedData
 *
 * @example
 * const { paginatedData, totalPages } = usePaginatedData(dataArray, 10)
 */
export const usePaginatedData = <T,>(
    data: Array<T>,
    defaultLimit = 20
): IUsePaginatedData<T> => {
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
