/*=============================================== HelmetPreview ===============================================*/

import { Helmet } from "../../../"
import type {} from "../../../types"
import type { ILibHelmet } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const helmetPreview: ComponentPreview<ILibHelmet> = {
    name: "Helmet",
    component: Helmet as any,
    category: "components",
    import: "Helmet",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibHelmet",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                title: "Hello Helmet title",
                keywords: ["foo", "baz", "bar"],
            },
        },
    ],
}
