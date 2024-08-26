/*=============================================== Card types ===============================================*/

import type {
    LibComponentBase,
    LibButtonLinkBlank,
    ILibBackgroundImage,
    ILibBorder,
    ILibRadius,
    CssCursor,
    ILibBoxShadow,
    LibAllColors,
    CssTextAlign,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

export type ILibCard = LibComponentBase<HTMLDivElement> &
    LibButtonLinkBlank &
    ILibFlexbox & {
        border?: ILibBorder
        borderRadius?: ILibRadius
        cursor?: CssCursor
        width?: string | number
        height?: string | number
        shadow?: ILibBoxShadow
        backgroundColor?: LibAllColors
        textColor?: LibAllColors
        backgroundImg?: ILibBackgroundImage
        textAlign?: CssTextAlign
    }
