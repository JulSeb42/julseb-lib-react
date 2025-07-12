import type {
	LibComponentBase,
	LibLoaderVariant,
	LibToastStatus,
	ReactChildren,
	ReactElement,
} from "../../types"

export interface ILibToast
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	title: ReactChildren
	status?: LibToastStatus
	body?: ReactChildren
	hideCloseButton?: boolean
	closeToast?: () => void
	iconClose?: ReactElement
	loaderVariant?: LibLoaderVariant
}
