/*=============================================== AlertPreview ===============================================*/

import { Alert } from "../../../"
import {  } from "../../../types"
import type { AlertProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const alertPreview: ComponentPreview<AlertProps, typeof Alert> = {
    name: "Alert",
    component: Alert,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
