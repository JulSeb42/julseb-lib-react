import { Grid } from "../../../"
import { GridItem } from "../../../../components/GridItem"
import type {} from "../../../types"
import type { ILibGrid } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const gridPreview: ComponentPreview<ILibGrid> = {
	name: "Grid",
	component: Grid,
	category: "layouts",
	import: "Grid", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibGrid", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			props: {
				cols: 3,
				colGap: "sm",
				rowGap: "2xl",
				children: (
					<>
						<GridItem />
						<GridItem />
						<GridItem />
						<GridItem />
					</>
				),
			},
		},
	],
}
