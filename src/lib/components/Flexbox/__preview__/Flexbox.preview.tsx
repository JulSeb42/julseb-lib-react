import { Flexbox } from "../../../"
import { GridItem } from "../../../../components"

import type { ILibFlexbox } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const flexboxPreview: ComponentPreview<ILibFlexbox> = {
	name: "Flexbox",
	component: Flexbox,
	category: "layouts",
	import: "Flexbox",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibFlexbox",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{
			props: {
				flexDirection: "col-reverse",
				rowGap: "xs",
				alignItems: "end",
				justifyContent: "end",
				children: (
					<>
						<GridItem />
						<GridItem>Longer item</GridItem>
						<GridItem />
						<GridItem>Even longer item</GridItem>
					</>
				),
			},
		},
	],
}
