/*=============================================== InputSliderPreview ===============================================*/

import { InputSlider } from "../../../"
import {  } from "../../../types"
import type { InputSliderProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputSliderPreview: ComponentPreview<InputSliderProps, typeof InputSlider> = {
    name: "InputSlider",
    component: InputSlider,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
