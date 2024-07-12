/*=============================================== MainPreview ===============================================*/

import { Main } from "../../../"
import type {} from "../../../types"
import { ContainerPreview } from "../../../../data/previews/layouts/Container.preview"
import type { MainProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const mainPreview: ComponentPreview<MainProps> = {
    name: "Main",
    component: Main,
    category: "components",
    import: "Main",
    additionalImports: null,
    optionalImports: null,
    propsImport: "MainProps",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <ContainerPreview
                    demos={[
                        "main-default",
                        "main-large",
                        "main-form",
                        "main-number",
                        "main-full",
                    ]}
                />
            ),
        },
    ],
}
