import { useSearchParams } from "react-router-dom"

interface IUsePaginatedData<T> {
	paginatedData: Array<T>
	totalPages: number
}

/**
 * @description Hook to use with Pagination or Paginator components
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#usePaginatedData
 * @argument data: Array<T> => to define
 * @argument defaultLimit?: number
 */
export const usePaginatedData = <T,>(
	data: Array<T>,
	defaultLimit = 20,
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
