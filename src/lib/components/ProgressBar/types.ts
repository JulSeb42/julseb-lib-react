import type { MeterHTMLAttributes } from "react"
import type { LibColorsShort, LibComponentBase } from "../../types"

export interface ILibProgressBar
	extends LibComponentBase<HTMLMeterElement>,
		MeterHTMLAttributes<HTMLMeterElement> {
	value: number
	color?: Exclude<
		LibColorsShort,
		"transparent" | "current" | "black" | "background"
	>
	noAnimation?: boolean
	children?: never
}
