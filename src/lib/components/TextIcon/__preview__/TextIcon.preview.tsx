/*=============================================== TextIconPreview ===============================================*/

import { TextIcon } from "../../../"
import {} from "../../../types"
import type { TextIconProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const textIconPreview: ComponentPreview<TextIconProps> = {
    name: "TextIcon",
    component: TextIcon,
    category: "components",
    import: "TextIcon",
    additionalImports: null,
    optionalImports: null,
    propsImport: "TextIconProps",
    additionalTypeImports: null,
    extends: ["TextProps"],
    previews: [
        {
            props: {
                icon: "arrow-right",
                tag: "h3",
                gap: "l",
                children: "Hello",
            },
        },
    ],
}
