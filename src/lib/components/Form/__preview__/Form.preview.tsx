/*=============================================== FormPreview ===============================================*/

import { Form } from "../../../"
import {  } from "../../../types"
import type { FormProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const formPreview: ComponentPreview<FormProps, typeof Form> = {
    name: "Form",
    component: Form,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
