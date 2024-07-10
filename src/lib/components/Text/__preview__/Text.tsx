/*=============================================== TextPreviews ===============================================*/

import type { ComponentPreview } from "../../../../data/components"
import { Text } from ".."
import { TextDisplay } from "./previews/TextDisplay"
import { TextTitles } from "./previews/TextTitles"
import { Paragraphs } from "./previews/Paragraphs"
import { Small } from "./previews/Small"
import { BlockQuote } from "./previews/Quote"
import { Unordered } from "./previews/Unordered"
import { Ordered } from "./previews/Ordered"
import { Description } from "./previews/Description"
import type { TextProps } from "../types"

export const textPreviews: ComponentPreview<TextProps, typeof Text> = {
    name: "Text",
    component: Text,
    category: "styles",
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
