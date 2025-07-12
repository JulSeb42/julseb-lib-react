import type { ButtonHTMLAttributes } from "react"
import type {
	LibColorsHover,
	LibComponentBase,
	LibRadiuses,
	ReactElement,
	LibButtonVariant,
	LibLoaderVariant,
	ClassNames,
	CSSProperties,
	LibTooltipPositionOptions,
} from "../../types"

interface ILibButtonIconBase
	extends LibComponentBase<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	children?: never
	icon: ReactElement
	color?: LibColorsHover
	borderRadius?: LibRadiuses
	variant?: LibButtonVariant
}

interface ButtonIconLoading extends ILibButtonIconBase {
	isLoading?: boolean
	loaderVariant?: LibLoaderVariant
	loaderClasses?: ClassNames
}

interface ButtonIconNotLoading extends ILibButtonIconBase {
	isLoading?: undefined | null
	loaderVariant?: never
	loaderClasses?: never
}

type ButtonIconLoader = ButtonIconLoading | ButtonIconNotLoading

type ButtonIconWithTooltip = ButtonIconLoader & {
	tooltip?: string
	showTooltip?: boolean | LibTooltipPositionOptions
	containerStyle?: CSSProperties
	containerClasses?: ClassNames
}

type ButtonIconWithoutTooltip = ButtonIconLoader & {
	tooltip?: undefined | null
	showTooltip?: never
	containerStyle?: never
	containerClasses?: never
}

export type ILibButtonIcon = ButtonIconWithTooltip | ButtonIconWithoutTooltip
