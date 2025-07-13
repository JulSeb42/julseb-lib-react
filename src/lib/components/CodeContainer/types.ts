import type { HighlightProps } from "prism-react-renderer"
import type { ClassNames } from "../../types"

export interface ILibCodeContainer
	extends Omit<HighlightProps, "children" | "code" | "language"> {
	children?: string
	code?: never
	showNumbers?: boolean
	language?: string
	className?: ClassNames
}
