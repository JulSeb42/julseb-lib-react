/*=============================================== ButtonGroupPreview ===============================================*/

import { ButtonGroup } from "../../../"
import {  } from "../../../types"
import type { ButtonGroupProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const buttonGroupPreview: ComponentPreview<ButtonGroupProps, typeof ButtonGroup> = {
    name: "ButtonGroup",
    component: ButtonGroup,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
