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
    imports: "Text",
    typeImports: "TextProps",
    demos: [
        { previewTitle: "Display", element: <TextDisplay /> },
        { previewTitle: "Titles", element: <TextTitles /> },
        { previewTitle: "Paragraphs", element: <Paragraphs /> },
        { previewTitle: "Small", element: <Small /> },
        { previewTitle: "Blockquote", element: <BlockQuote /> },
        { previewTitle: "Unordered list", element: <Unordered /> },
        { previewTitle: "Ordered list", element: <Ordered /> },
        { previewTitle: "Description list", element: <Description /> },
    ],
}
