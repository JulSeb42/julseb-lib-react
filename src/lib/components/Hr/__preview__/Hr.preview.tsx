/*=============================================== HrPreview ===============================================*/

import { Hr } from "../../../"
import type { HrProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<HrProps, typeof Hr> = {
    name: "Hr",
    component: Hr,
    category: "components",
    props: [{}],
}
