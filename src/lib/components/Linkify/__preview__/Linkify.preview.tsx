/*=============================================== LinkifyPreview ===============================================*/

import { Linkify } from "../../../"
import {  } from "../../../types"
import type { LinkifyProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkifyPreview: ComponentPreview<LinkifyProps, typeof Linkify> = {
    name: "Linkify",
    component: Linkify,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
