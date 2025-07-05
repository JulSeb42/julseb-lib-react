import type {
	LibComponentBase,
	LibToastStatus,
	ReactChildren,
} from "../../types"

export interface ILibToast
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	title: ReactChildren
	status?: LibToastStatus
	body?: ReactChildren
	hideCloseButton?: boolean
	closeToast?: () => void
}
