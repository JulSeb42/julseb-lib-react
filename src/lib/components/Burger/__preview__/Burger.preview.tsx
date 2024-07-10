/*=============================================== BurgerPreview ===============================================*/

import { Burger } from "../../../"
import {  } from "../../../types"
import type { BurgerProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const burgerPreview: ComponentPreview<BurgerProps, typeof Burger> = {
    name: "Burger",
    component: Burger,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
