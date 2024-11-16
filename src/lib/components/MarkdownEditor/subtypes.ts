// @ts-nocheck
/*=============================================== MarkdownEditor sub components types ===============================================*/

import type { RefObject } from "react"
import type { LibMdEditorEditor, DispatchState } from "../../types"
import type { ILibMarkdownEditor } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN MARKDOWN_EDITOR COMPONENTS

export interface ILibMdEditorInput extends ILibMarkdownEditor {
    editor: LibMdEditorEditor
    setHeight: DispatchState<number>
    inputRef: RefObject<HTMLTextAreaElement>
}

export interface ILibMdEditorButtons
    extends Pick<
        Partial<ILibMarkdownEditor>,
        | "showButtons"
        | "className"
        | "data-testid"
        | "icons"
        | "iconsSizes"
        | "iconsBaseUrl"
    > {
    editor: LibMdEditorEditor
    setEditor: DispatchState<LibMdEditorEditor>
}

export interface ILibMarkdownEditorTitles
    extends Pick<
        ILibMarkdownEditor,
        "data-testid" | "showButtons" | "className" | "textButtonTitles"
    > {
    inputRef: RefObject<HTMLTextAreaElement>
    addCode: (code: string) => void
}

export interface ILibMarkdownEditorMdButtons
    extends Pick<
        ILibMarkdownEditor,
        | "showButtons"
        | "icons"
        | "iconsSizes"
        | "iconsBaseUrl"
        | "data-testid"
        | "className"
    > {
    addCode: (code: string) => void
}

export interface ILibMdEditorHelmet {
    editor: LibMdEditorEditor
    height: number
}
