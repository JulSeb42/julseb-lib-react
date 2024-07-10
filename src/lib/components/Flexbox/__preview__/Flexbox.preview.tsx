/*=============================================== FlexboxPreview ===============================================*/

import { Flexbox } from "../"
import { GridItem } from "../../../../components"
import type { FlexboxProps } from "../types"
import type { ComponentPreview } from "../../../../data/components"

export const flexboxPreview: ComponentPreview<FlexboxProps, typeof Flexbox> = {
    name: "Flexbox",
    component: Flexbox,
    category: "layouts",
    props: [
        {
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
    ],
}
