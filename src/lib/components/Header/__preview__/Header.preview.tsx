/*=============================================== HeaderPreview ===============================================*/

import { Link } from "react-router-dom"
import { Header, Text } from "../../../"
import type {} from "../../../types"
import type { ILibHeader } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const headerPreview: ComponentPreview<ILibHeader> = {
    name: "Header",
    component: Header,
    category: "components",
    import: "Header",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibHeader",
    additionalTypeImports: ["LibHeaderLink"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <Text>
                    <Link
                        to="/header/demo"
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
