/*=============================================== ImagePreview ===============================================*/

import { Image } from "../../../"
import {  } from "../../../types"
import type { ImageProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const imagePreview: ComponentPreview<ImageProps, typeof Image> = {
    name: "Image",
    component: Image,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
