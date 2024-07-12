/*=============================================== Modal types ===============================================*/

import type {
    LibButtonVariant,
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    DispatchState,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

interface ILibModalBase extends LibComponentBase<HTMLDivElement>, ILibFlexbox {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    disableEsc?: boolean
    contentWidth?: string | number
}

interface ModalWithCloseButton extends ILibModalBase {
    hideCloseButton?: false | undefined
    buttonClose?: {
        icon?: LibIcon
        color?: LibColorsHover
        size?: number
        variant?: Exclude<LibButtonVariant, "outline">
        label?: string
    }
}

interface ModalWithoutCloseButton extends ILibModalBase {
    hideCloseButton?: true
    buttonClose?: never
}

export type ILibModal = ModalWithCloseButton | ModalWithoutCloseButton
