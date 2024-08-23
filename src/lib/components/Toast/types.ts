/*=============================================== Toast types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibComponentBase,
    LibShadows,
    LibToasterPosition,
    LibToast,
    LibToastOptions,
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
    hideCloseButton?: boolean
}

export interface ILibToaster extends LibComponentBase<HTMLDivElement> {
    className?: string
    toasts: Array<LibToast>
    toastsOptions?: Pick<
        LibToastOptions,
        | "duration"
        | "labelClose"
        | "withTimer"
        | "icons"
        | "iconSizes"
        | "iconsBaseUrl"
    >
    isOpen: boolean
    position?: LibToasterPosition
}
