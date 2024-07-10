/*=============================================== ListGroupPreview ===============================================*/

import { ListGroup } from "../../../"
import {  } from "../../../types"
import type { ListGroupProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const listGroupPreview: ComponentPreview<ListGroupProps, typeof ListGroup> = {
    name: "ListGroup",
    component: ListGroup,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
