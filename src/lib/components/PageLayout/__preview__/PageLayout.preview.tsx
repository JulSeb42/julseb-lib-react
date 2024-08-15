/*=============================================== PageLayoutPreview ===============================================*/

import { Link } from "react-router-dom"
import { PageLayout, Text } from "../../../"
import type {} from "../../../types"
import type { ILibPageLayout } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const pageLayoutPreview: ComponentPreview<ILibPageLayout> = {
    name: "PageLayout",
    component: PageLayout,
    category: "components",
    import: "PageLayout",
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibPageLayout", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            demo: (
                <Text>
                    <Link to="/page-layout/demo" target="_blank" rel="noreferrer noopener">Demo here</Link>
                </Text>
            ),
        },
    ],
}
