import type { LibComponentBase } from "../../types"
import type { ILibText } from "../Text/types"

export interface ILibCollapsedText extends LibComponentBase<HTMLDivElement> {
	defaultOpen?: boolean
	texts?: { read?: string; more?: string; less?: string }
	textProps?: ILibText
	collapsedMaxLines?: number
}
