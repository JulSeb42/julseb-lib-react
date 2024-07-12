/*=============================================== FlexboxPreview ===============================================*/

import { Flexbox } from "../"
import { GridItem } from "../../../../components"
import type { FlexboxProps } from "../types"
import type { ComponentPreview } from "../../../../data/components"

export const flexboxPreview: ComponentPreview<FlexboxProps> = {
    name: "Flexbox",
    component: Flexbox,
    category: "layouts",
    import: "Flexbox",
    additionalImports: null,
    optionalImports: null,
    propsImport: "FlexboxProps",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            props: {
                flexDirection: "column-reverse",
                rowGap: "xs",
                alignItems: "flex-end",
                justifyContent: "flex-end",
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
