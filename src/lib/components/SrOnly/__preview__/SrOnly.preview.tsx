/*=============================================== SrOnlyPreview ===============================================*/

import { SrOnly } from "../../../"
import type {} from "../../../types"
import type { ILibSrOnly } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const srOnlyPreview: ComponentPreview<ILibSrOnly> = {
    name: "SrOnly",
    component: SrOnly,
    category: "components",
    import: "SrOnly",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibSrOnly",
    additionalTypeImports: [],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { children: "Hello", as: "h1" } },
    ],
}
