import type { DispatchState, LibComponentBase, ReactElement } from "../../types"

interface ILibModalBase extends LibComponentBase<HTMLDivElement> {
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
	disableEsc?: boolean
}

interface ModalWithCloseButton extends ILibModalBase {
	hideCloseButton?: false | undefined
	closeIcon?: ReactElement
	labelClose?: string
}

interface ModalWithoutCloseButton extends ILibModalBase {
	hideCloseButton?: true
	closeIcon?: never
	labelClose?: never
}

export type ILibModal = ModalWithCloseButton | ModalWithoutCloseButton
