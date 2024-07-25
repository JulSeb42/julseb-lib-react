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
    import: "Header", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibHeader", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
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
