/*=============================================== Image types ===============================================*/

import type { ElementType, ImgHTMLAttributes } from "react"
import type {
    LibComponentBase,
    ILibRadius,
    ObjectFit,
    LibAllColors,
    LibImageBackgroundOverlay,
} from "../../types"

export interface ILibImage
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: ILibRadius
    fit?: ObjectFit
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
