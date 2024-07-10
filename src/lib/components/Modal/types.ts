/*=============================================== Modal types ===============================================*/

import type {
    LibButtonVariant,
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    DispatchState,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

interface ModalPropsBase
    extends LibComponentBase<HTMLDivElement>,
        FlexboxProps {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    disableEsc?: boolean
    contentWidth?: string | number
}

interface ModalWithCloseButton extends ModalPropsBase {
    hideCloseButton?: false | undefined
    buttonClose?: {
        icon?: LibIcon
        color?: LibColorsHover
        size?: number
        variant?: Exclude<LibButtonVariant, "outline">
        label?: string
    }
}

interface ModalWithoutCloseButton extends ModalPropsBase {
    hideCloseButton?: true
    buttonClose?: never
}

export type ModalProps = ModalWithCloseButton | ModalWithoutCloseButton
