/*=============================================== MarkdownEditorPreview ===============================================*/

import { MarkdownEditor } from "../../../"
import type { ILibMarkdownEditor } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { MarkdownEditorDemo } from "./MarkdownEditor.demo"

export const markdownEditorPreview: ComponentPreview<ILibMarkdownEditor> = {
    name: "MarkdownEditor",
    component: MarkdownEditor,
    category: "components",
    import: "MarkdownEditor",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibMarkdownEditor",
    additionalTypeImports: ["LibMarkdownEditorOptions"],
    extends: ["HTMLTextAreaElement"],
    previews: [
        {
            demo: (
                <MarkdownEditorDemo
                    data-testid="testid"
                    className="className"
                />
            ),
        },
    ],
}
