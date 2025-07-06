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
	props: [],
}
