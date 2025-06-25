import type { ButtonHTMLAttributes } from "react"
import type {
	LibButtonSize,
	LibButtonVariant,
	LibColorsHover,
	LibComponentBase,
	LibLoaderVariant,
} from "../../types"

interface ILibButtonBase
	extends LibComponentBase<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: LibButtonVariant
	color?: LibColorsHover
	size?: LibButtonSize
}

interface ButtonWithLoader extends ILibButtonBase {
	isLoading?: boolean
	loaderVariant?: LibLoaderVariant
}

interface ButtonWithoutLoader extends ILibButtonBase {
	isLoading?: undefined | null
	loaderVariant?: never
}

export type ILibButton = ButtonWithLoader | ButtonWithoutLoader
