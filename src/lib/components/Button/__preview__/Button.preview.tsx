/*=============================================== ButtonPreview ===============================================*/

import { Button } from "../../../"
import {  } from "../../../types"
import type { ButtonProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const buttonPreview: ComponentPreview<ButtonProps, typeof Button> = {
    name: "Button",
    component: Button,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
