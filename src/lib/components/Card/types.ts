/*=============================================== Card types ===============================================*/

import type {
    LibComponentBase,
    LibButtonLinkBlank,
    BackgroundImageProps,
    LibBorderProps,
    LibRadiusProps,
    LibPaddingProps,
    Cursor,
    LibBoxShadowProps,
    LibAllColors,
    TextAlign,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

export type CardProps = LibComponentBase<HTMLDivElement> &
    LibButtonLinkBlank &
    FlexboxProps & {
        border?: LibBorderProps
        borderRadius?: LibRadiusProps
        padding?: LibPaddingProps
        cursor?: Cursor
        width?: string | number
        height?: string | number
        shadow?: LibBoxShadowProps
        backgroundColor?: LibAllColors
        textColor?: LibAllColors
        backgroundImg?: BackgroundImageProps
        textAlign?: TextAlign
    }
