import type { ButtonHTMLAttributes } from "react"
import type {
	LibButtonSize,
	LibButtonVariantExtended,
	LibColorsHover,
	LibComponentBase,
	LibLoaderVariant,
	LibRadiuses,
} from "../../types"

interface ILibButtonBase
	extends LibComponentBase<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: LibButtonVariantExtended
	color?: LibColorsHover
	size?: LibButtonSize
	borderRadius?: LibRadiuses
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
