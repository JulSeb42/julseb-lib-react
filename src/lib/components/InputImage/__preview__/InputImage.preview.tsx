/*=============================================== InputImagePreview ===============================================*/

import { InputImage } from "../../../"
import {  } from "../../../types"
import type { InputImageProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputImagePreview: ComponentPreview<InputImageProps, typeof InputImage> = {
    name: "InputImage",
    component: InputImage,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
