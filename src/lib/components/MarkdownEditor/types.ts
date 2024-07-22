/*=============================================== MarkdownEditor types ===============================================*/

import type { TextareaHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibIcon,
    LibMdEditorEditor,
    DispatchState,
} from "../../types"
import type { ILibExtendedInputBase } from "../InputComponents/types"

export interface ILibMarkdownEditor
    extends Exclude<LibComponentBase<HTMLTextAreaElement>, "as">,
        Omit<ILibExtendedInputBase, "inputVariant">,
        TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string
    setValue: DispatchState<string>
    onChange?: never
    defaultEditor?: LibMdEditorEditor
    textButtonTitles?: string
    showButtons?: {
        bold?: boolean
        italic?: boolean
        strikethrough?: boolean
        ul?: boolean
        ol?: boolean
        link?: boolean
        quote?: boolean
        hr?: boolean
        code?: boolean
        codeBlock?: boolean
        comment?: boolean
        image?: boolean
        editorCode?: boolean
        editorLive?: boolean
        editorPreview?: boolean
        titles?: boolean
    }
    icons?: {
        bold?: LibIcon
        italic?: LibIcon
        strikethrough?: LibIcon
        ul?: LibIcon
        ol?: LibIcon
        link?: LibIcon
        quote?: LibIcon
        hr?: LibIcon
        code?: LibIcon
        codeBlock?: LibIcon
        comment?: LibIcon
        image?: LibIcon
        editorCode?: LibIcon
        editorLive?: LibIcon
        editorPreview?: LibIcon
    }
    iconsSizes?: {
        bold?: number
        italic?: number
        strikethrough?: number
        ul?: number
        ol?: number
        link?: number
        quote?: number
        hr?: number
        code?: number
        codeBlock?: number
        comment?: number
        image?: number
        editorCode?: number
        editorLive?: number
        editorPreview?: number
    }
}
