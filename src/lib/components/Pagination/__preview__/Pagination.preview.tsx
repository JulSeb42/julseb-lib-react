import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import {
	Pagination,
	generateNumbers,
	usePaginatedData,
	PaginationButton,
	usePagination,
} from "../../../"
import type {} from "../../../types"
import type { ILibPagination } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const arr: Array<{ name: string }> = generateNumbers(1, 200).map(n => ({
	name: `Hello ${n}`,
}))

const PaginationDemo = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const { paginatedData, totalPages } = usePaginatedData(arr, currentPage)

	return (
		<>
			<div className="gap-2 grid grid-cols-4">
				{paginatedData.map((item, i) => (
					<div
						key={i}
						className="p-2 border border-gray-200 rounded-lg"
					>
						{item.name}
					</div>
				))}
			</div>

			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	)
}

const PaginationDemoRouter = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [currentPage, setCurrentPage] = useState(
		Number(searchParams.get("page")) || 1,
	)
	const pageLimit = 5

	const { paginatedData, totalPages } = usePaginatedData(arr, currentPage)

	const { handlePrev, handlePage, handleNext } = usePagination({
		currentPage,
		setCurrentPage,
		totalPages,
	})

	const handlePrevPage = () => {
		handlePrev()
		setSearchParams({ page: (currentPage - 1).toString() })
	}

	const handleNewPage = (n: number) => {
		handlePage(n)
		setSearchParams({ page: n.toString() })
	}

	const handleNextPage = () => {
		handleNext()
		setSearchParams({ page: (currentPage + 1).toString() })
	}

	const getPaginationGroup = () => {
		const start = Math.floor((currentPage! - 1) / pageLimit) * pageLimit

		return new Array(pageLimit)
			.fill(totalPages)
			.map((_, i) => start + i + 1)
			.filter(item => item <= (totalPages || 0))
	}

	const paginationGroup = getPaginationGroup()

	return (
		<>
			<div className="gap-2 grid grid-cols-4">
				{paginatedData.map((item, i) => (
					<div
						key={i}
						className="p-2 border border-gray-200 rounded-lg"
					>
						{item.name}
					</div>
				))}
			</div>

			<Pagination>
				<PaginationButton
					onClick={handlePrevPage}
					isActive={false}
					disabled={currentPage === 1}
				>
					<BiLeftArrowAlt size={24} />
				</PaginationButton>

				{paginationGroup[0] !== 1 && (
					<>
						<PaginationButton
							isActive={currentPage === 1}
							onClick={() => handleNewPage(1)}
						>
							1
						</PaginationButton>

						<PaginationButton readOnly>...</PaginationButton>
					</>
				)}

				{paginationGroup.map(n => (
					<PaginationButton
						isActive={n === currentPage}
						onClick={() => handleNewPage(n)}
						key={n}
					>
						{n}
					</PaginationButton>
				))}

				{paginationGroup[paginationGroup.length - 1] !== totalPages && (
					<>
						<PaginationButton readOnly>...</PaginationButton>

						<PaginationButton
							isActive={currentPage === totalPages}
							onClick={() => handleNewPage(totalPages)}
						>
							{totalPages}
						</PaginationButton>
					</>
				)}

				<PaginationButton
					onClick={handleNextPage}
					isActive={false}
					disabled={currentPage === totalPages}
				>
					<BiRightArrowAlt size={24} />
				</PaginationButton>
			</Pagination>
		</>
	)
}

export const paginationPreview: ComponentPreview<ILibPagination> = {
	name: "Pagination",
	component: Pagination,
	category: "components",
	import: "Pagination", // import Component (ex: Skeleton)
	additionalImports: ["usePaginatedData"], // import OtherComponent (ex: SkeletonCard)
	optionalImports: ["PaginationButton"], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibPagination", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", demo: <PaginationDemo /> },
		{ previewTitle: "With React router", demo: <PaginationDemoRouter /> },
	],
	propsTitle: "Pagination",
	props: [
		{
			name: "currentPage",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Current active page number.",
			isRequired: true,
		},
		{
			name: "setCurrentPage",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to update the current page state.",
			isRequired: true,
		},
		{
			name: "totalPages",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Total number of pages available for navigation.",
			isRequired: true,
		},
		{
			name: "accentColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
			],
			defaultValue: "primary",
			description: "Color theme for active page and hover states.",
			isRequired: false,
		},
		{
			name: "pageLimit",
			type: "number",
			possibleValues: [],
			defaultValue: "5",
			description: "Maximum number of page buttons to display at once.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Custom icons for previous and next navigation buttons.",
			isRequired: false,
		},
	],
	propsSecondTitle: "Pagination Button",
	propsSecond: [
		{
			name: "accentColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
			],
			defaultValue: "primary",
			description: "Color theme for active and hover states.",
			isRequired: false,
		},
		{
			name: "isActive",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether this button represents the current active page.",
			isRequired: false,
		},
		{
			name: "readOnly",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether the button is in read-only mode (non-interactive).",
			isRequired: false,
		},
	],
}
