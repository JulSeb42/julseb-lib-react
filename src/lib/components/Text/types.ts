import type { ElementType } from "react"
import type {
	CssTextAlign,
	LibColors,
	LibColorsHover,
	LibComponentBase,
	LibTextDisplay,
	LibTextNoDisplay,
} from "../../types"

interface ILibTextBase
	extends LibComponentBase<
		HTMLHeadingElement &
			HTMLParagraphElement &
			HTMLQuoteElement &
			HTMLDListElement &
			HTMLOListElement &
			HTMLUListElement
	> {
	element?: ElementType
	color?: LibColors
	linkColor?: LibColorsHover
	textAlign?: CssTextAlign
}

interface TextDisplay extends ILibTextBase {
	tag?: LibTextDisplay
	display?: boolean
}

interface TextNoDisplay extends ILibTextBase {
	tag?: LibTextNoDisplay
	display?: never
}

export type ILibText = TextDisplay | TextNoDisplay
