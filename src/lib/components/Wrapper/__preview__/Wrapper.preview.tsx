/*=============================================== WrapperPreview ===============================================*/

import { Wrapper } from "../../../"
import type {} from "../../../types"
import { ContainerPreview } from "../../../../data/previews/layouts/Container.preview"
import type { ILibWrapper } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const wrapperPreview: ComponentPreview<ILibWrapper> = {
    name: "Wrapper",
    component: Wrapper,
    category: "components",
    import: "Wrapper",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibWrapper",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <ContainerPreview demos={["main-default", "aside-default"]} />
            ),
        },
    ],
}
