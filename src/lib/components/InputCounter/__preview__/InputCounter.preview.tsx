/*=============================================== InputCounterPreview ===============================================*/

import { InputCounter } from "../../../"
import {  } from "../../../types"
import type { InputCounterProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCounterPreview: ComponentPreview<InputCounterProps, typeof InputCounter> = {
    name: "InputCounter",
    component: InputCounter,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
