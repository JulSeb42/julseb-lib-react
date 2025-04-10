import { Link } from "react-router-dom"
import { PageLayout, Text } from "../../../"
import type { ILibPageLayout } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const pageLayoutPreview: ComponentPreview<ILibPageLayout> = {
    name: "PageLayout",
    component: PageLayout,
    category: "components",
    import: "PageLayout",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibPageLayout",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            demo: (
                <Text>
                    <Link
                        to="/page-layout/demo"
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
