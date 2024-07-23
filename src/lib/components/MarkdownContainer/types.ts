/*=============================================== MarkdownContainer types ===============================================*/

import type { MarkdownToJSX } from "markdown-to-jsx"
import type { LibComponentBase } from "../../types"

export interface ILibMarkdownContainer
    extends Exclude<LibComponentBase<HTMLDivElement>, "as"> {
    options?: MarkdownToJSX.Options
}
