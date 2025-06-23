import type { CSSProperties } from "react"
import type { ILibText } from "../Text/types"
import type { ClassNames } from "../../types"

export type ILibHighlight = ILibText & {
	highlightedText: string
	highlightStyle?: CSSProperties
	highlightClasses?: ClassNames
}
