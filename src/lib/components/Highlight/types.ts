import type { CSSProperties } from "react"
import type { ClassNameValue } from "tailwind-merge"
import type { ILibText } from "../Text/types"

export type ILibHighlight = ILibText & {
	highlightedText: string
	highlightStyle?: CSSProperties	
	highlightClasses?: Array<ClassNameValue>
}
