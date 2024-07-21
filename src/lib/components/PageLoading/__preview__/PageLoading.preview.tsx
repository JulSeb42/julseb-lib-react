/*=============================================== PageLoadingPreview ===============================================*/

import { Link } from "react-router-dom"
import { PageLoading, Text } from "../../../"
import type { ILibPageLoading } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const pageLoadingPreview: ComponentPreview<ILibPageLoading> = {
    name: "PageLoading",
    component: PageLoading,
    category: "components",
    import: "PageLoading",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibPageLoading",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <Text>
                    <Link
                        to="/page-loading/demo"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Demo
                    </Link>
                </Text>
            ),
        },
    ],
}
