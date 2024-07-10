/*=============================================== DropdownPreview ===============================================*/

import { Dropdown } from "../../../"
import {  } from "../../../types"
import type { DropdownProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const dropdownPreview: ComponentPreview<DropdownProps, typeof Dropdown> = {
    name: "Dropdown",
    component: Dropdown,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
