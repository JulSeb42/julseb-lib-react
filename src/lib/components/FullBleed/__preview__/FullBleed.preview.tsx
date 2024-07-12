/*=============================================== FullBleedPreview ===============================================*/

import { Link } from "react-router-dom"
import { FullBleed, Text } from "../../../"
import {} from "../../../types"
import type { FullBleedProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const fullBleedPreview: ComponentPreview<FullBleedProps> = {
    name: "FullBleed",
    component: FullBleed,
    category: "components",
    imports: ["FullBleed"],
    typeImports: ["FullBleedProps"],
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
