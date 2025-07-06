import { useState, type FC } from "react"
import type { ILibTextEditor } from "../types"

export const Preview: FC<
	Omit<ILibTextEditor, "editorState" | "setEditorState">
> = props => {
	
	return (
		<div></div>
	)
}
