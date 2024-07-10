/*=============================================== InputPreview ===============================================*/

import { Input } from "../../../"
import {  } from "../../../types"
import type { InputProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPreview: ComponentPreview<InputProps, typeof Input> = {
    name: "Input",
    component: Input,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
