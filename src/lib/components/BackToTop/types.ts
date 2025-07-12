import type { ILibButtonIcon } from "../ButtonIcon/types"
import type { ReactElement } from "../../types"

export type ILibBackToTop = Omit<
	Partial<ILibButtonIcon>,
	"icon" | "isLoading" | "loaderVariant" | "loaderClasses"
> & {
	icon?: ReactElement
}
