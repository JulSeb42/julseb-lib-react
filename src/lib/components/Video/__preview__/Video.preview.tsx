/*=============================================== VideoPreview ===============================================*/

import { Video } from "../../../"
import {} from "../../../types"
import type { VideoProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const VIDEO_SRC =
    "https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"

export const videoPreview: ComponentPreview<VideoProps> = {
    name: "Video",
    component: Video,
    category: "components",
    imports: ["Video"],
    typeImports: ["VideoProps"],
    extends: [
        "HTMLVideoElement",
        "VideoHTMLAttributes<HTMLVideoElement>",
        "SourceHTMLAttributes<HTMLVideoElement>",
    ],
    props: [
        { previewTitle: "Default", src: VIDEO_SRC },
        {
            previewTitle: "Autoplay",
            src: VIDEO_SRC,
            height: "40vw",
            autoPlay: true,
            fit: "cover",
        },
    ],
}
