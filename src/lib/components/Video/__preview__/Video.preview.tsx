/*=============================================== VideoPreview ===============================================*/

import { Video } from "../../../"
import type { ILibVideo } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const VIDEO_SRC =
    "https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"

export const videoPreview: ComponentPreview<ILibVideo> = {
    name: "Video",
    component: Video,
    category: "components",
    import: "Video",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibVideo",
    additionalTypeImports: null,
    extends: [
        "HTMLVideoElement",
        "VideoHTMLAttributes<HTMLVideoElement>",
        "SourceHTMLAttributes<HTMLVideoElement>",
    ],
    previews: [
        {
            previewTitle: "Default",
            props: {
                src: VIDEO_SRC,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Autoplay",
            props: {
                src: VIDEO_SRC,
                height: "40vw",
                autoPlay: true,
                fit: "cover",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
