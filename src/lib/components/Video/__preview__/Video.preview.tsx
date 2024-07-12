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
    import: "Video",
    additionalImports: null,
    optionalImports: null,
    propsImport: "VideoProps",
    additionalTypeImports: null,
    extends: [
        "HTMLVideoElement",
        "VideoHTMLAttributes<HTMLVideoElement>",
        "SourceHTMLAttributes<HTMLVideoElement>",
    ],
    previews: [
        { previewTitle: "Default", props: { src: VIDEO_SRC } },
        {
            previewTitle: "Autoplay",
            props: {
                src: VIDEO_SRC,
                height: "40vw",
                autoPlay: true,
                fit: "cover",
            },
        },
    ],
}
