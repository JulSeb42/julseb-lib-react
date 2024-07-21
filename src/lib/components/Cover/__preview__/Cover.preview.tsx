/*=============================================== CoverPreview ===============================================*/

import { Link } from "react-router-dom"
import { toSentenceCase } from "ts-utils-julseb"
import { Cover, Text } from "../../../"
import type {} from "../../../types"
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
    import: "Cover", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibCover", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        // { previewTitle: "Default", props: {  } },
        // { previewTitle: "Default", demo: <Cover /> },
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
