/*=============================================== Youtube types ===============================================*/

import type { IframeHTMLAttributes } from "react"
import type { LibComponentBase } from "../../types"

export interface YoutubeProps
    extends Exclude<LibComponentBase<HTMLIFrameElement>, "as">,
        IframeHTMLAttributes<HTMLIFrameElement> {
    aspectRatio?: string
}
