import { Link } from "react-router-dom"
import { PageLoading, Text } from "../../../"
import type {} from "../../../types"
import type { ILibPageLoading } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const pageLoadingPreview: ComponentPreview<ILibPageLoading> = {
	name: "Page Loading",
	component: PageLoading,
	category: "components",
	import: "PageLoading", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibPageLoading", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			demo: (
				<Text>
					<Link
						to="/page-loading/demo"
						target="_blank"
						rel="noreferrer noopener"
					>
						Demo here
					</Link>
				</Text>
			),
		},
	],
	props: [
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "primary-500",
			description: "Background color for the loading overlay.",
			isRequired: false,
		},
		{
			name: "loaderColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "white",
			description: "Color of the loading spinner.",
			isRequired: false,
		},
		{
			name: "loaderVariant",
			type: "number",
			possibleValues: [1, 2, 3],
			defaultValue: "1",
			description: "Visual variant of the loading spinner.",
			isRequired: false,
		},
		{
			name: "stopScrolling",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description:
				"Whether to disable page scrolling while loading is visible.",
			isRequired: false,
		},
	],
}
