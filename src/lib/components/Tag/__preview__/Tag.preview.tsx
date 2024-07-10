/*=============================================== TagPreview ===============================================*/

import { Tag } from "../../../"
import {  } from "../../../types"
import type { TagProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tagPreview: ComponentPreview<TagProps, typeof Tag> = {
    name: "Tag",
    component: Tag,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
