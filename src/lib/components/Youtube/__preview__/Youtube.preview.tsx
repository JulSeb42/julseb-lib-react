/*=============================================== YoutubePreview ===============================================*/

import { Youtube } from "../../../"
import {  } from "../../../types"
import type { YoutubeProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const youtubePreview: ComponentPreview<YoutubeProps, typeof Youtube> = {
    name: "Youtube",
    component: Youtube,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
