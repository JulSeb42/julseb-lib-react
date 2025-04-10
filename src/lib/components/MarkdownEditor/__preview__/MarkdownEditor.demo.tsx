import { useState } from "react"
import { MarkdownEditor } from "../../../"
import type { ILibMarkdownEditor } from "../types"

export const MarkdownEditorDemo = (
    props: Omit<ILibMarkdownEditor, "value" | "setValue">
) => {
    const [value, setValue] = useState("# Hello World\n\nHow are you?")

    return <MarkdownEditor value={value} setValue={setValue} {...props} />
}
