/*=============================================== AsidePreview ===============================================*/

import { Aside } from "../../../"
import type {} from "../../../types"
import { ContainerPreview } from "../../../../data/previews/layouts/Container.preview"
import type { ILibAside } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const asidePreview: ComponentPreview<ILibAside> = {
    name: "Aside",
    component: Aside,
    category: "components",
    import: "Aside",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibAside",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <ContainerPreview
                    demos={["aside-default", "aside-small", "aside-both-sides"]}
                />
            ),
        },
    ],
}
