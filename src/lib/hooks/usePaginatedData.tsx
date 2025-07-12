interface IUsePaginatedData<T> {
	paginatedData: Array<T>
	totalPages: number
}

/**
 * Hook to paginate data with URL parameter integration for use with Pagination or Paginator components.
 *
 * @hook
 *
 * @example
 * const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, ...]
 * const { paginatedData, totalPages } = usePaginatedData(users, 1, 10)
 *
 * return (
 *   <div>
 *     {paginatedData.map(user => <UserCard key={user.id} user={user} />)}
 *     <Pagination totalPages={totalPages} />
 *   </div>
 * )
 *
 * @template T - Type of the data items being paginated
 * @param {Array<T>} data - Array of data to paginate
 * @param {number} page - Current page number (1-indexed)
 * @param {number} [defaultLimit=20] - Number of items per page
 *
 * @returns {object} Object containing paginated data and pagination info
 * @returns {Array<T>} returns.paginatedData - Current page's data items
 * @returns {number} returns.totalPages - Total number of pages based on data length and limit
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#usePaginatedData
 */
export const usePaginatedData = <T,>(
	data: Array<T>,
	page: number,
	defaultLimit = 20,
): IUsePaginatedData<T> => {
	const currentPage: number = page ?? 1

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
