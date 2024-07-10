/*=============================================== InputPhonePreview ===============================================*/

import { InputPhone } from "../../../"
import {  } from "../../../types"
import type { InputPhoneProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPhonePreview: ComponentPreview<InputPhoneProps, typeof InputPhone> = {
    name: "InputPhone",
    component: InputPhone,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
