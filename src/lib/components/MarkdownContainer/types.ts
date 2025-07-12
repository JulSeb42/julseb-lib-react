import type { MarkdownToJSX } from "markdown-to-jsx"
import type { LibComponentBase, ReactChildren } from "../../types"

export interface ILibMarkdownContainer
	extends Omit<LibComponentBase<HTMLDivElement>, "element"> {
	options?: MarkdownToJSX.Options
	children?: ReactChildren
}
