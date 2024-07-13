/*=============================================== Image types ===============================================*/

import type { ElementType, ImgHTMLAttributes } from "react"
import type {
    LibComponentBase,
    ILibRadius,
    CssObjectFit,
    LibAllColors,
    LibImageBackgroundOverlay,
} from "../../types"

export interface ILibImage
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: ILibRadius
    fit?: CssObjectFit
    aspectRatio?: string
    fallback?: JSX.Element
    caption?:
        | string
        | {
              text: string
              textColor?: LibAllColors
              background?: LibImageBackgroundOverlay
              as?: ElementType
          }
}
