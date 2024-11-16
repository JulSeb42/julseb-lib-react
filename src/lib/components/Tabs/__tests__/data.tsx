/*=============================================== Tabs tests demo ===============================================*/

import { Text } from "../../Text"
import type { LibTabItem } from "../../../types"

export const tabsItems: Array<LibTabItem> = [
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
