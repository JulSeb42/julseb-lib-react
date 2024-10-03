/*=============================================== MarkdownEditorPreview ===============================================*/

import { useState } from "react"
import { MarkdownEditor } from "../../../"
import type { ILibMarkdownEditor } from "../types"

export const MarkdownEditorPreview = (props: Omit<ILibMarkdownEditor, "value" | "setValue">) => {
    const [value, setValue] = useState("")

    return <MarkdownEditor value={value} setValue={setValue} {...props} />
}
