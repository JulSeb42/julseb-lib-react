/*=============================================== InputCheckPreview ===============================================*/

import { InputCheck } from "../../../"
import {  } from "../../../types"
import type { InputCheckProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCheckPreview: ComponentPreview<InputCheckProps, typeof InputCheck> = {
    name: "InputCheck",
    component: InputCheck,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
