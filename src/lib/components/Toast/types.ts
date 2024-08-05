/*=============================================== Toast types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibComponentBase,
    LibShadows,
    LibToasterPosition,
    LibToast,
} from "../../types"

export interface ILibToast extends LibComponentBase<HTMLDivElement>, LibToast {
    title: string
    toasterPosition?: LibToasterPosition
    toastStyle?: {
        maxWidth?: string | number
        border?: ILibBorder
        backgroundColor?: LibAllColors
        textColor?: LibAllColors
        shadow?: LibShadows
    }
    iconBaseUrl?: string
    hideCloseButton?: boolean
}
