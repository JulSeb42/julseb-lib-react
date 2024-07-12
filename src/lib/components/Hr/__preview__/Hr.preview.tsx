/*=============================================== HrPreview ===============================================*/

import { Hr } from "../../../"
import type { HrProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<HrProps> = {
    name: "Hr",
    component: Hr,
    category: "components",
    imports: "Hr",
    typeImports: "HrProps",
    extends: "HTMLHRElement",
    previews: [{ props: {} }],
}
