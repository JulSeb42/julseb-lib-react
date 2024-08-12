/*=============================================== Image types ===============================================*/

import type { CSSProperties, ElementType, ImgHTMLAttributes } from "react"
import type {
    LibComponentBase,
    ILibRadius,
    CssObjectFit,
    LibAllColors,
    LibImageBackgroundOverlay,
} from "../../types"

interface ILibImageBase
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: ILibRadius
    fit?: CssObjectFit
    aspectRatio?: string
    fallback?: JSX.Element
}

interface ImageWithCaption extends ILibImageBase {
    caption?:
        | string
        | {
              text: string
              textColor?: LibAllColors
              background?: LibImageBackgroundOverlay
              as?: ElementType
          }
    containerStyle?: CSSProperties
}

interface ImageWithoutCaption extends ILibImageBase {
    caption?: undefined
    containerStyle?: never
}

export type ILibImage = ImageWithCaption | ImageWithoutCaption
