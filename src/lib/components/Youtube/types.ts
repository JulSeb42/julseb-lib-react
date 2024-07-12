/*=============================================== Youtube types ===============================================*/

import type { IframeHTMLAttributes } from "react"
import type { LibComponentBase } from "../../types"

export interface ILibYoutube
    extends Exclude<LibComponentBase<HTMLIFrameElement>, "as">,
        IframeHTMLAttributes<HTMLIFrameElement> {
    aspectRatio?: string
}
