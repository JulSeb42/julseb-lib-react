import { useState, type FC } from "react"
import { useSearchParams } from "react-router-dom"
import {
	generateNumbers,
	Paginator,
	usePaginatedData,
	usePagination,
} from "../../../"
import type {} from "../../../types"
import type { ILibPaginator } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const arr: Array<{ name: string }> = generateNumbers(1, 200).map(n => ({
	name: `Hello ${n}`,
}))

const Preview: FC<
	Omit<ILibPaginator, "totalPages" | "currentPage" | "setCurrentPage">
> = props => {
	const [currentPage, setCurrentPage] = useState(1)

	const { totalPages, paginatedData } = usePaginatedData(arr, currentPage)

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

			<Paginator
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				{...props}
			/>
		</>
	)
}

const PreviewRouter = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = Number(searchParams.get("page")) || 1

	const [currentPage, setCurrentPage] = useState(page)

	const { paginatedData, totalPages } = usePaginatedData(arr, page)
	const { handlePrev, handlePage, handleNext } = usePagination({
		currentPage,
		setCurrentPage,
		totalPages,
	})

	const handlePrevPage = () => {
		handlePrev()
		setCurrentPage(currentPage - 1)
		setSearchParams({ page: (currentPage - 1).toString() })
	}

	const handleNewPage = (n: number) => {
		handlePage(n)
		setCurrentPage(n)
		setSearchParams({ page: n.toString() })
	}

	const handleNextPage = () => {
		handleNext()
		setCurrentPage(currentPage + 1)
		setSearchParams({ page: (currentPage + 1).toString() })
	}

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

			<Paginator
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				handlePrev={handlePrevPage}
				handlePage={handleNewPage}
				handleNext={handleNextPage}
			/>
		</>
	)
}

export const paginatorPreview: ComponentPreview<ILibPaginator> = {
	name: "Paginator",
	component: Paginator,
	category: "components",
	import: "Paginator", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibPaginator", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{
			previewTitle: "No input",
			demo: <Preview noInput hideButtonsTooltip />,
		},
		{ previewTitle: "With router", demo: <PreviewRouter /> },
	],
	props: [
		{
			name: "totalPages",
			type: "number",
			possibleValues: [],
			defaultValue: null,
			description: "Total number of pages available for navigation.",
			isRequired: true,
		},
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
			name: "noInput",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether to hide the page input field and show read-only text.",
			isRequired: false,
		},
		{
			name: "texts",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Custom text labels for page display.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Custom icons for navigation buttons.",
			isRequired: false,
		},
		{
			name: "labels",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Custom aria labels and tooltips for navigation buttons.",
			isRequired: false,
		},
		{
			name: "hideButtonsTooltip",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide tooltips on navigation buttons.",
			isRequired: false,
		},
		{
			name: "handlePrev",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Custom handler for previous page navigation.",
			isRequired: false,
		},
		{
			name: "handleNext",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Custom handler for next page navigation.",
			isRequired: false,
		},
		{
			name: "handlePage",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Custom handler for direct page navigation.",
			isRequired: false,
		},
	],
}
