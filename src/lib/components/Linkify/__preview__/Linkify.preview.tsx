/*=============================================== LinkifyPreview ===============================================*/

import { Linkify } from "../../../"
import type { ILibLinkify } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkifyPreview: ComponentPreview<ILibLinkify> = {
    name: "Linkify",
    component: Linkify,
    category: "components",
    import: "Linkify",
    additionalImports: null,
    optionalImports: null,
    propsImport: "LinkifyProps",
    additionalTypeImports: null,
    extends: ["TextProps"],
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
