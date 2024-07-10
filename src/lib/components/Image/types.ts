/*=============================================== Image types ===============================================*/

import type { ElementType, ImgHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibRadiusProps,
    ObjectFit,
    LibAllColors,
    LibImageBackgroundOverlay,
} from "../../types"

export interface ImageProps
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: LibRadiusProps
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
