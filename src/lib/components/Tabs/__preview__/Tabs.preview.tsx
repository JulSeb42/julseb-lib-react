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
    import: "Tabs",
    additionalImports: [],
    optionalImports: [
        "TabsContainer",
        "TabsButtonsContainer",
        "TabButton",
        "TabItem",
    ],
    propsImport: "ILibTabs",
    additionalTypeImports: ["LibTabItem"],
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
