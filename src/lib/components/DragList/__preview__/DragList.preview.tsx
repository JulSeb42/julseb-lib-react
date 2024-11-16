/*=============================================== DragListPreview ===============================================*/

import { useState } from "react"
import { convertDateShort } from "@julseb-lib/utils"
import { DragList } from "../../../"
import type { LibDragListItem } from "../../../types"
import type { ILibDragList } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const DragListDemo = (
    props: Omit<ILibDragList, "items" | "setItems" | "children">
) => {
    const [items, setItems] = useState<Array<LibDragListItem>>([
        { id: "0", title: "First", body: "Body" },
        {
            id: "1",
            title: "Second",
            badge: { backgroundColor: "success" },
        },
        {
            id: "2",
            title: "Third",
            body: "Item",
            date: convertDateShort(new Date()),
        },
    ])

    return <DragList items={items} setItems={setItems} {...props} />
}

export const dragListPreview: ComponentPreview<ILibDragList> = {
    name: "DragList",
    component: DragList,
    category: "components",
    import: "DragList",
    additionalImports: null,
    optionalImports: ["DragListItem"],
    propsImport: "ILibDragList",
    additionalTypeImports: ["LibDragListItem"],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", demo: <DragListDemo /> },
        {
            previewTitle: "Other styles & props",
            demo: (
                <DragListDemo
                    gap="xxl"
                    iconDrag="burger-menu"
                    border={{ style: "dotted", width: 2, color: "secondary" }}
                    borderRadius="xxl"
                    padding="xxl"
                    hideSeparator
                />
            ),
        },
    ],
}
