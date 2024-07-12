/*=============================================== HrPreview ===============================================*/

import { Hr } from "../../../"
import type { HrProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<HrProps> = {
    name: "Hr",
    component: Hr,
    category: "components",
    import: "Hr",
    additionalImports: null,
    optionalImports: null,
    propsImport: "HrProps",
    additionalTypeImports: null,
    extends: ["HTMLHRElement"],
    previews: [{ props: {} }],
}
