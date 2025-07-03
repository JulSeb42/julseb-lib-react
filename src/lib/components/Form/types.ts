import type { FormHTMLAttributes, MouseEventHandler, ElementType } from "react"
import type {
	LibComponentBase,
	LibLoaderVariant,
	ReactChildren,
} from "../../types"

interface ILibFormBase
	extends Omit<LibComponentBase<HTMLFormElement>, "element">,
		FormHTMLAttributes<HTMLFormElement> {
	isLoading?: boolean
	loaderVariant?: LibLoaderVariant
	disabled?: boolean
}

interface FormWithButton extends ILibFormBase {
	buttonPrimary?: ReactChildren
	buttonSecondary?: {
		content: ReactChildren
		type?: "button" | "reset"
		onClick?: MouseEventHandler<HTMLButtonElement>
		disabled?: boolean
		element?: ElementType
	}
}

interface FormWithoutButton extends ILibFormBase {
	buttonPrimary?: undefined
	buttonSecondary?: never
}

export type ILibForm = FormWithButton | FormWithoutButton
