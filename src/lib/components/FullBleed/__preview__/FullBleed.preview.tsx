/*=============================================== FullBleedPreview ===============================================*/

import { Link } from "react-router-dom"
import { FullBleed, Text } from "../../../"
import type { ILibFullBleed } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const fullBleedPreview: ComponentPreview<ILibFullBleed> = {
    name: "FullBleed",
    component: FullBleed,
    category: "components",
    import: "FullBleed",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibFullBleed",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <Text>
                    <Link
                        to="/demos/main-full"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Demo here
                    </Link>
                </Text>
            ),
        },
    ],
}
