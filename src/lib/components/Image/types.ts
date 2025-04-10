import type { CSSProperties, ElementType, ImgHTMLAttributes } from "react"
import type {
    LibComponentBase,
    ILibRadius,
    CssObjectFit,
    LibAllColors,
    LibImageBackgroundOverlay,
    LibFontSizes,
} from "../../types"

interface ILibImageBase
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: ILibRadius
    fit?: CssObjectFit
    aspectRatio?: string
    fallback?: JSX.Element | string
    imgFallback?: {
        text: string
        background?: LibAllColors
        textColor?: LibAllColors
        fontSize?: LibFontSizes
    }
    children?: never
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
    containerAs?: ElementType
}

interface ImageWithoutCaption extends ILibImageBase {
    caption?: undefined
    containerStyle?: never
    containerAs?: never
}

export type ILibImage = ImageWithCaption | ImageWithoutCaption
