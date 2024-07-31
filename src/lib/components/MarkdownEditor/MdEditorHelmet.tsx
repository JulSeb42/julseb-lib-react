/*=============================================== MdEditorHelmet component ===============================================*/

import { HelmetStyles } from "../../lib-utils"
import type { LibMdEditorEditor } from "../../types"

interface ILibMdEditorHelmet {
    editor: LibMdEditorEditor
    height: number
}

export function MdEditorHelmet({ editor, height }: ILibMdEditorHelmet) {
    return (
        <HelmetStyles>
            {`
                :root {
                    --markdown-editor-grid: ${
                        editor === "editorLive" ? "1fr 2px 1fr" : 1
                    };
                    --markdown-input-height: ${height}px;

                }
            `}
        </HelmetStyles>
    )
}
