/*=============================================== Toast types ===============================================*/

import type {
    LibAllColors,
    LibBorderProps,
    LibComponentBase,
    LibShadows,
    LibToasterPosition,
    LibToast,
} from "../../types"

export interface ToastProps
    extends LibComponentBase<HTMLDivElement>,
        LibToast {
    title: string
    toasterPosition?: LibToasterPosition
    toastStyle?: {
        maxWidth?: string | number
        border?: LibBorderProps
        backgroundColor?: LibAllColors
        textColor?: LibAllColors
        shadow?: LibShadows
    }
}
