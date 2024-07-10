/*=============================================== ToastPreview ===============================================*/

import { Toast } from "../../../"
import {  } from "../../../types"
import type { ToastProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const toastPreview: ComponentPreview<ToastProps, typeof Toast> = {
    name: "Toast",
    component: Toast,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
