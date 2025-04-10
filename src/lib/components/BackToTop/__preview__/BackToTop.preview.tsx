import { Link } from "react-router-dom"
import { BackToTop, Text } from "../../../"
import type { ILibBackToTop } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const backToTopPreview: ComponentPreview<ILibBackToTop> = {
    name: "BackToTop",
    component: BackToTop,
    category: "components",
    import: "BackToTop",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibBackToTop",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <Text>
                    <Link
                        to="/back-to-top/demo"
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
