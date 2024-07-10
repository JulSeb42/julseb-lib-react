/*=============================================== AccordionPreview ===============================================*/

import type { ComponentPreview } from "../../../../data/components"
import { Icon } from "../Icon"
import type { IconProps } from "../types"

export const iconPreview: ComponentPreview<IconProps, typeof Icon> = {
    name: "Icon",
    component: Icon,
    category: "components",
    props: [{ src: "arrow-left", color: "success", size: 120 }],
}
