/*=============================================== TextPreviews ===============================================*/

import type { ComponentPreview } from "../../../../data/components"
import { Text } from "../../../"
import type { TextProps } from "../types"
import { TextDisplay } from "./previews/TextDisplay"
import { TextTitles } from "./previews/TextTitles"
import { Paragraphs } from "./previews/Paragraphs"
import { Small } from "./previews/Small"
import { BlockQuote } from "./previews/Quote"
import { Unordered } from "./previews/Unordered"
import { Ordered } from "./previews/Ordered"
import { Description } from "./previews/Description"

export const textPreviews: ComponentPreview<TextProps> = {
    name: "Text",
    component: Text,
    category: "styles",
    import: "Text",
    additionalImports: null,
    optionalImports: null,
    propsImport: "TextProps",
    additionalTypeImports: null,
    extends: ["HTMLElement"],
    previews: [
        { previewTitle: "Display", demo: <TextDisplay /> },
        { previewTitle: "Titles", demo: <TextTitles /> },
        { previewTitle: "Paragraphs", demo: <Paragraphs /> },
        { previewTitle: "Small", demo: <Small /> },
        { previewTitle: "Blockquote", demo: <BlockQuote /> },
        { previewTitle: "Unordered list", demo: <Unordered /> },
        { previewTitle: "Ordered list", demo: <Ordered /> },
        { previewTitle: "Description list", demo: <Description /> },
    ],
}
