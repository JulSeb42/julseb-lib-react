import { scrollToTop } from "../utils"
import type { DispatchState } from "../types"

interface ILibUsePaginationNavigation {
	currentPage: number
	setCurrentPage: DispatchState<number>
	totalPages?: number
}

/**
 * Hook to manage pagination navigation with URL parameter integration and automatic scrolling.
 *
 * @hook
 *
 * @example
 * const [currentPage, setCurrentPage] = useState(1)
 * const { handlePrev, handleNext, handlePage } = usePagination({
 *   currentPage,
 *   setCurrentPage,
 *   totalPages: 10
 * })
 *
 * return (
 *   <div>
 *     <button onClick={handlePrev}>Previous</button>
 *     <button onClick={() => handlePage(5)}>Go to page 5</button>
 *     <button onClick={handleNext}>Next</button>
 *   </div>
 * )
 *
 * @param {object} params - Configuration object for pagination
 * @param {number} params.currentPage - Current active page number
 * @param {DispatchState<number>} params.setCurrentPage - State setter function for current page
 * @param {number} [params.totalPages] - Total number of pages available
 *
 * @returns {object} Object containing pagination navigation functions
 * @returns {function} returns.handlePrev - Function to navigate to the previous page
 * @returns {function} returns.handleNext - Function to navigate to the next page
 * @returns {function} returns.handlePage - Function to navigate to a specific page number
 * @returns {number} returns.handlePage.n - Page number to navigate to
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#usePagination
 */
export const usePagination = ({
	currentPage,
	setCurrentPage,
	totalPages,
}: ILibUsePaginationNavigation) => {
	const handlePrev = () => {
		setCurrentPage(currentPage - 1)
		scrollToTop()
	}

	const handleNext = () => {
		setCurrentPage(currentPage + 1)
		scrollToTop()
	}

	const handlePage = (n: number) => {
		if (n < 1) {
			setCurrentPage(1)
			return
		}

		if (totalPages && n > totalPages) {
			setCurrentPage(totalPages)
			return
		}

		setCurrentPage(n)
		scrollToTop()
	}

	return { handlePrev, handleNext, handlePage }
}
