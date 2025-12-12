import { type FC, type ChangeEvent } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { ButtonIcon } from "../ButtonIcon"
import { Text } from "../Text"
import { usePagination } from "../../hooks"
import { clsx } from "../../utils"
import type { ILibPaginator } from "./types"

/**
 * Paginator component for simple page navigation with input field and next/previous buttons.
 *
 * @component
 *
 * @example
 * <Paginator
 *   currentPage={currentPage}
 *   setCurrentPage={setCurrentPage}
 *   totalPages={20}
 *   texts={{ page: "Page", of: "of" }}
 *   labels={{ prev: "Previous", next: "Next" }}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the paginator container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the paginator element.
 * @prop {number} [props.totalPages] - Total number of pages available for navigation.
 * @prop {number} [props.currentPage] - Current active page number.
 * @prop {function} [props.setCurrentPage] - Function to update the current page state.
 * @prop {boolean} [props.noInput] - Whether to hide the page input field and show read-only text.
 * @prop {object} [props.texts] - Custom text labels for page display.
 * @prop {string} [props.texts.page="Page"] - Text label for "Page".
 * @prop {string} [props.texts.of="of"] - Text label for "of".
 * @prop {object} [props.icons] - Custom icons for navigation buttons.
 * @prop {React.ReactNode} [props.icons.prev] - Custom icon for the previous page button.
 * @prop {React.ReactNode} [props.icons.next] - Custom icon for the next page button.
 * @prop {object} [props.labels] - Custom aria labels and tooltips for navigation buttons.
 * @prop {string} [props.labels.prev="Previous"] - Label for the previous page button.
 * @prop {string} [props.labels.next="Next"] - Label for the next page button.
 * @prop {boolean} [props.hideButtonsTooltip] - Whether to hide tooltips on navigation buttons.
 * @prop {function} [props.handlePrev] - Custom handler for previous page navigation.
 * @prop {function} [props.handleNext] - Custom handler for next page navigation.
 * @prop {function} [props.handlePage] - Custom handler for direct page navigation.
 *
 * @returns {JSX.Element} The rendered Paginator component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/paginator
 */
const Paginator: FC<ILibPaginator> = ({
	className,
	element = "div",
	ref,
	totalPages,
	currentPage,
	setCurrentPage,
	noInput,
	texts,
	icons,
	labels,
	hideButtonsTooltip,
	handlePrev,
	handleNext,
	handlePage,
	...rest
}) => {
	const Element = element

	const {
		handlePrev: handlePrevPage,
		handlePage: handleNewPage,
		handleNext: handleNextPage,
	} = usePagination({ currentPage, setCurrentPage, totalPages })

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		handlePage
			? handlePage(Number(e.target.value))
			: handleNewPage(Number(e.target.value))

	if (totalPages && totalPages <= 1) return null

	return (
		<Element
			ref={ref}
			className={clsx("flex gap-2", "paginator", className)}
			{...rest}
		>
			{noInput ? (
				<Text className="paginator-text">
					{texts?.page ?? "Page"} {currentPage} {texts?.of ?? "of"}{" "}
					{totalPages}
				</Text>
			) : (
				<span className="paginator-text-wrapper">
					{texts?.page ?? "Page"}{" "}
					<input
						value={currentPage}
						onChange={handleChange}
						type="number"
						step={1}
						min={1}
						max={totalPages}
						className={clsx(
							"bg-background px-2 border border-gray-200 rounded-md outline-none w-[calc(2ch+20px)]",
							"focus:border-primary-500",
							"[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [appearance:textfield]",
							"paginator-input",
						)}
						size={currentPage.toString().length + 1}
					/>{" "}
					{texts?.of ?? "of"} {totalPages}
				</span>
			)}

			<ButtonIcon
				icon={icons?.prev ?? <BiLeftArrowAlt />}
				className="size-6 paginator-button"
				disabled={currentPage === 1}
				onClick={handlePrev ?? handlePrevPage}
				aria-label={labels?.prev ?? "Previous"}
				tooltip={labels?.prev ?? "Previous"}
				showTooltip={!hideButtonsTooltip && { offset: "xs" }}
			/>

			<ButtonIcon
				icon={icons?.next ?? <BiRightArrowAlt />}
				className="size-6 paginator-button"
				disabled={currentPage === totalPages}
				onClick={handleNext ?? handleNextPage}
				aria-label={labels?.next ?? "Next"}
				tooltip={labels?.next ?? "Next"}
				showTooltip={!hideButtonsTooltip && { offset: "xs" }}
			/>
		</Element>
	)
}

export default Paginator
