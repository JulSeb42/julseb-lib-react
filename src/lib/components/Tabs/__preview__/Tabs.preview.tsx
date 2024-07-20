/*=============================================== TabsPreview ===============================================*/

import { Tabs, Text } from "../../../"
import type { LibTabItem } from "../../../types"
import type { ILibTabs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const tabsItems: Array<LibTabItem> = [
    {
        title: "First",
        content: "Content tab 1",
    },
    {
        title: "Second",
        content: (
            <>
                <Text>Hello</Text>
                <Text>World</Text>
            </>
        ),
    },
    {
        title: "Third",
        content: "Content tab 3",
    },
]

export const tabsPreview: ComponentPreview<ILibTabs> = {
    name: "Tabs",
    component: Tabs,
    category: "components",
    import: "Tabs", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [
        "TabsContainer",
        "TabsButtonsContainer",
        "TabButton",
        "TabItem",
    ], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibTabs", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: ["LibTabItem"], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Basic",
            props: { tabsItems, showInUrl: true },
        },
        {
            previewTitle: "Rounded",
            props: { tabsItems, variant: "rounded", justify: "stretch" },
        },
    ],
}
