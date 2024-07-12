/*=============================================== GridPreview ===============================================*/

import { Grid } from "../"
import { GridItem } from "../../../../components"
import type { GridProps } from "../types"
import type { ComponentPreview } from "../../../../data/components"

export const gridPreview: ComponentPreview<GridProps> = {
    name: "Grid",
    component: Grid,
    category: "layouts",
    import: "Grid",
    additionalImports: null,
    optionalImports: null,
    propsImport: "GridProps",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            props: {
                col: 3,
                columnGap: "s",
                rowGap: "xxl",
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
