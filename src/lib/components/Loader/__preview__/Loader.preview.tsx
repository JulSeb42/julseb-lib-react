/*=============================================== LoaderPreview ===============================================*/

import { Loader } from "../../../"
import {  } from "../../../types"
import type { LoaderProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const loaderPreview: ComponentPreview<LoaderProps, typeof Loader> = {
    name: "Loader",
    component: Loader,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
