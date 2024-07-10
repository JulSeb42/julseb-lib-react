/*=============================================== VideoPreview ===============================================*/

import { Video } from "../../../"
import {  } from "../../../types"
import type { VideoProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const videoPreview: ComponentPreview<VideoProps, typeof Video> = {
    name: "Video",
    component: Video,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
