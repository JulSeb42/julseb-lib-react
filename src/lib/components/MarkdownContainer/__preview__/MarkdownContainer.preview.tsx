/*=============================================== MarkdownContainerPreview ===============================================*/

import { MarkdownContainer } from "../../../"
import type { ILibMarkdownContainer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const markdownContainerPreview: ComponentPreview<ILibMarkdownContainer> =
    {
        name: "MarkdownContainer",
        component: MarkdownContainer,
        category: "components",
        import: "MarkdownContainer",
        additionalImports: null,
        optionalImports: null,
        propsImport: "ILibMarkdownContainer",
        additionalTypeImports: null,
        extends: ["HTMLDivElement"],
        previews: [
            {
                props: {
                    children:
                        "## Hello world \n\n I'm some markdown content **compiled** to *jsx*",
                    "data-testid": "testid",
                    className: "className",
                },
            },
        ],
    }
