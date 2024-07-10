/*=============================================== TextIconPreview ===============================================*/

import { TextIcon } from "../../../"
import {} from "../../../types"
import type { TextIconProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const textIconPreview: ComponentPreview<TextIconProps> = {
    name: "TextIcon",
    component: TextIcon,
    category: "components",
    imports: "TextIcon",
    typeImports: "TextIconProps",
    extends: "TextProps",
    props: [
        {
            icon: "arrow-right",
            tag: "h3",
            gap: "l",
            children: "Hello",
        },
    ],
}
