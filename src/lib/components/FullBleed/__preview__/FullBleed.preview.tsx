/*=============================================== FullBleedPreview ===============================================*/

import { FullBleed } from "../../../"
import {  } from "../../../types"
import type { FullBleedProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const fullBleedPreview: ComponentPreview<FullBleedProps, typeof FullBleed> = {
    name: "FullBleed",
    component: FullBleed,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
