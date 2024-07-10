/*=============================================== TextIconPreview ===============================================*/

import { TextIcon } from "../../../"
import {  } from "../../../types"
import type { TextIconProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const textIconPreview: ComponentPreview<TextIconProps, typeof TextIcon> = {
    name: "TextIcon",
    component: TextIcon,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
