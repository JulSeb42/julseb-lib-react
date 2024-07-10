/*=============================================== ProgressBarPreview ===============================================*/

import { ProgressBar } from "../../../"
import {  } from "../../../types"
import type { ProgressBarProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressBarPreview: ComponentPreview<ProgressBarProps, typeof ProgressBar> = {
    name: "ProgressBar",
    component: ProgressBar,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
