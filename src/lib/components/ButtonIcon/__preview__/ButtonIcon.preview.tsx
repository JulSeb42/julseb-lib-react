/*=============================================== ButtonIconPreview ===============================================*/

import { ButtonIcon } from "../../../"
import {  } from "../../../types"
import type { ButtonIconProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const buttonIconPreview: ComponentPreview<ButtonIconProps, typeof ButtonIcon> = {
    name: "ButtonIcon",
    component: ButtonIcon,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
