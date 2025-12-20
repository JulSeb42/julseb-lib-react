import { type FC } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { PaginationButton } from "./PaginationButton"
import { usePagination, useMaxWidth } from "../../hooks"
import { clsx } from "../../utils"
import type { ILibPagination } from "./types"

/**
 * Pagination component for navigating through multiple pages of content with customizable styling and navigation controls.
 *
 * @component
 *
 * @example
 * <Pagination
 *   currentPage={currentPage}
 *   setCurrentPage={setCurrentPage}
 *   totalPages={20}
 *   accentColor="primary"
 *   pageLimit={5}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the pagination container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the pagination element.
 * @prop {React.ReactNode} [props.children] - Child components to render when not using totalPages prop.
 * @prop {LibAllColors} [props.accentColor="primary"] - Color theme for active page and hover states.
 * @prop {number} [props.totalPages] - Total number of pages available for navigation.
 * @prop {object} [props.icons] - Custom icons for previous and next navigation buttons.
 * @prop {React.ReactNode} [props.icons.prev] - Custom icon for the previous page button.
 * @prop {React.ReactNode} [props.icons.next] - Custom icon for the next page button.
 * @prop {number} [props.pageLimit=5] - Maximum number of page buttons to display at once.
 * @prop {number} [props.currentPage] - Current active page number.
 * @prop {function} [props.setCurrentPage] - Function to update the current page state.
 *
 * @returns {JSX.Element} The rendered Pagination component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/pagination
 */
export const Pagination: FC<ILibPagination> = ({
	className,
	element = "div",
	ref,
	children,
	accentColor = "primary",
	totalPages,
	icons,
	pageLimit = 5,
	currentPage,
	setCurrentPage,
	...rest
}) => {
	const Element = element

	const { handlePrev, handlePage, handleNext } = usePagination({
		currentPage: currentPage!,
		setCurrentPage: setCurrentPage!,
		totalPages,
	})

	const getPaginationGroup = () => {
		const start = Math.floor((currentPage! - 1) / pageLimit) * pageLimit

		return new Array(pageLimit)
			.fill(totalPages)
			.map((_, i) => start + i + 1)
			.filter(item => item <= (totalPages || 0))
	}

	const paginationGroup = getPaginationGroup()

	const isMobile = useMaxWidth(600)

	if (totalPages && totalPages <= 1) return null

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex justify-center w-full",
				isMobile ? "gap-1" : "gap-2",
				"pagination",
				className,
			)}
			{...rest}
		>
			{totalPages ? (
				<>
					<PaginationButton
						onClick={handlePrev}
						isActive={false}
						disabled={currentPage === 1}
						accentColor={accentColor}
					>
						{icons?.prev ?? <BiLeftArrowAlt size={24} />}
					</PaginationButton>

					{paginationGroup[0] !== 1 && (
						<>
							<PaginationButton
								isActive={currentPage === 1}
								onClick={() => handlePage(1)}
								accentColor={accentColor}
							>
								1
							</PaginationButton>

							<PaginationButton
								accentColor={accentColor}
								readOnly
							>
								...
							</PaginationButton>
						</>
					)}

					{paginationGroup.map(n => (
						<PaginationButton
							isActive={n === currentPage}
							onClick={() => handlePage(n)}
							accentColor={accentColor}
							key={n}
						>
							{n}
						</PaginationButton>
					))}

					{paginationGroup[paginationGroup.length - 1] !==
						totalPages && (
						<>
							<PaginationButton
								accentColor={accentColor}
								readOnly
							>
								...
							</PaginationButton>

							<PaginationButton
								isActive={currentPage === totalPages}
								onClick={() => handlePage(totalPages)}
								accentColor={accentColor}
							>
								{totalPages}
							</PaginationButton>
						</>
					)}

					<PaginationButton
						onClick={handleNext}
						isActive={false}
						disabled={currentPage === totalPages}
						accentColor={accentColor}
					>
						{icons?.next ?? <BiRightArrowAlt size={24} />}
					</PaginationButton>
				</>
			) : (
				children
			)}
		</Element>
	)
}
