import type { CSSProperties } from "react"
import type { ILibText } from "../Text/types"

export type ILibHighlight = ILibText & {
	highlightedText: string
	highlightStyle?: CSSProperties
	highlightClasses?: string | Array<string>
}
