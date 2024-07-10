/*=============================================== MasonryPreview ===============================================*/

import { Masonry } from "../../../"
import {  } from "../../../types"
import type { MasonryProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const masonryPreview: ComponentPreview<MasonryProps, typeof Masonry> = {
    name: "Masonry",
    component: Masonry,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
