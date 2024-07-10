/*=============================================== YoutubePreview ===============================================*/

import { Youtube } from "../../../"
import {} from "../../../types"
import type { YoutubeProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const YOUTUBE_SRC = "https://www.youtube.com/watch?v=33KKr1ZGSzg"

export const youtubePreview: ComponentPreview<YoutubeProps> = {
    name: "Youtube",
    component: Youtube,
    category: "components",
    imports: ["Youtube"],
    typeImports: ["YoutubeProps"],
    extends: ["HTMLIFrameElement", "IframeHTMLAttributes<HTMLIFrameElement>"],
    props: [{ src: YOUTUBE_SRC }],
}
