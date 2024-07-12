/*=============================================== HrPreview ===============================================*/

import { Hr } from "../../../"
import type { HrProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<HrProps> = {
    name: "Hr",
    component: Hr,
    category: "components",
    import: "Hr",
    propsImport: "HrProps",
    extends: "HTMLHRElement",
    previews: [{ props: {} }],
}
