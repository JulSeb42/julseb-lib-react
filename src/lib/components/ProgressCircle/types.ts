import type {
	LibColorsShort,
	LibComponentBase,
	ReactElement,
} from "../../types"

interface ILibProgressCircleBase extends LibComponentBase<HTMLDivElement> {
	value: number
	size?: number
	strokeWidth?: number
	noAnimation?: boolean
	color?: Exclude<
		LibColorsShort,
		"transparent" | "current" | "black" | "background"
	>
	children?: never
}

interface ProgressCircleWithNumber extends ILibProgressCircleBase {
	showValue?: true
	icon?: never
}

interface ProgressCircleWithIcon extends ILibProgressCircleBase {
	showValue?: never
	icon?: ReactElement
}

export type ILibProgressCircle =
	| ProgressCircleWithNumber
	| ProgressCircleWithIcon
