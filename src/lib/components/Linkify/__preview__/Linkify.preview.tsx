/*=============================================== LinkifyPreview ===============================================*/

import { Linkify } from "../../../"
import type { LinkifyProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkifyPreview: ComponentPreview<LinkifyProps> = {
    name: "Linkify",
    component: Linkify,
    category: "components",
    import: "Linkify",
    propsImport: "LinkifyProps",
    extends: "TextProps",
    previews: [
        {
            previewTitle: "Default",
            props: {
                children: "Hello world https://julien-sebag.com/ foo baz",
                blank: true,
            },
        },
    ],
}
