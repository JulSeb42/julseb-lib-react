/*=============================================== SelectPreview ===============================================*/

import { Select } from "../../../"
import {  } from "../../../types"
import type { SelectProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const selectPreview: ComponentPreview<SelectProps, typeof Select> = {
    name: "Select",
    component: Select,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
