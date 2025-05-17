import { Grid } from "../../../"
import { GridItem } from "../../../../components/GridItem"

import type { ILibGrid } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const gridPreview: ComponentPreview<ILibGrid> = {
	name: "Grid",
	component: Grid,
	category: "layouts",
	import: "Grid",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibGrid",
	additionalTypeImports: null,
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
