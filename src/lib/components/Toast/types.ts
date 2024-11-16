/*=============================================== Toast types ===============================================*/

import type {
    LibComponentBase,
    LibToasterPosition,
    LibToast,
    LibToastOptions,
} from "../../types"

export interface ILibToast extends LibComponentBase<HTMLDivElement>, LibToast {
    title: string
    toasterPosition?: LibToasterPosition
    maxWidth?: string | number
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
        | "iconLeftColor"
    >
    isOpen: boolean
    position?: LibToasterPosition
}
