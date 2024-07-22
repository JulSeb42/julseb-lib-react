/*=============================================== MarkdownEditorPreview ===============================================*/

import { MarkdownEditor } from "../../../"
import type {} from "../../../types"
import type { ILibMarkdownEditor } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { MarkdownEditorDemo } from "./MarkdownEditor.demo"

export const markdownEditorPreview: ComponentPreview<ILibMarkdownEditor> = {
    name: "MarkdownEditor",
    component: MarkdownEditor,
    category: "components",
    import: "MarkdownEditor", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibMarkdownEditor", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLTextAreaElement"],
    previews: [
        // { previewTitle: "Default", props: {  } },
        { demo: <MarkdownEditorDemo /> },
    ],
}
