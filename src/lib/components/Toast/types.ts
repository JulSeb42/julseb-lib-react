/*=============================================== Toast types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibComponentBase,
    LibShadows,
    LibToasterPosition,
    LibToast,
    LibToastOptions,
    LibIcon,
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

export interface ILibToaster extends LibComponentBase<HTMLDivElement> {
    className?: string
    toasts: Array<LibToast>
    toastsOptions?: Pick<
        LibToastOptions,
        "duration" | "labelClose" | "withTimer"
    >
    isOpen: boolean
    iconClose?: LibIcon
    iconCloseSize?: number
    position?: LibToasterPosition
}
