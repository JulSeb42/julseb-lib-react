/*=============================================== DragListPreview ===============================================*/

import { useState } from "react"
import { convertDateShort } from "@julseb-lib/utils"
import { DragList } from "../../../"
import type { LibDragListItem } from "../../../types"
import type { ILibDragList } from "../types"

export function DragListPreview(
    props: Omit<ILibDragList, "items" | "setItems" | "children">
) {
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

    return (
        <DragList
            data-testid="testid"
            className="className"
            items={items}
            setItems={setItems}
            {...props}
        />
    )
}
