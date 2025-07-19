import type { ElementType } from "react"
import type {
	CssTextAlign,
	LibAllColors,
	LibColorsHover,
	LibComponentBase,
	LibTextTagDisplay,
	LibTextTagNoDisplay,
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
	color?: LibAllColors
	linkColor?: LibColorsHover
	textAlign?: CssTextAlign
}

interface TextDisplay extends ILibTextBase {
	tag?: LibTextTagDisplay
	display?: boolean
}

interface TextNoDisplay extends ILibTextBase {
	tag?: LibTextTagNoDisplay
	display?: never
}

export type ILibText = TextDisplay | TextNoDisplay
