/*=============================================== CoverPreview ===============================================*/

import { Link } from "react-router-dom"
import { toSentenceCase } from "ts-utils-julseb"
import { Cover, Text } from "../../../"
import type { ILibCover } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const pages = [
    "cover-center",
    "cover-center-overlay",
    "cover-bottom",
    "cover-bottom-overlay",
]

export const coverPreview: ComponentPreview<ILibCover> = {
    name: "Cover",
    component: Cover,
    category: "components",
    import: "Cover",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibCover",
    additionalTypeImports: null,
    extends: ["HTMLDivElement", "ILibFlexbox"],
    previews: [
        {
            demo: (
                <>
                    {pages.map(page => (
                        <Text key={page}>
                            <Link
                                to={`/cover/${page}`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Demo {toSentenceCase(page)}
                            </Link>
                        </Text>
                    ))}
                </>
            ),
        },
    ],
}
