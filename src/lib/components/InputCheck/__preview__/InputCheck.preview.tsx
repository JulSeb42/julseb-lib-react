/*=============================================== InputCheckPreview ===============================================*/

import { InputCheck } from "../../../"
import type {} from "../../../types"
import {
    InputCheckDemoCheckbox,
    InputCheckDemoRadio,
    InputCheckDemoCheckboxTile,
    InputCheckDemoRadioTile,
    InputCheckDemoCheckboxToggle,
    InputCheckDemoCheckboxSelector,
} from "./InputCheck.demo"
import type { ILibInputCheck } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCheckPreview: ComponentPreview<ILibInputCheck> = {
    name: "InputCheck",
    component: InputCheck,
    category: "components",
    import: "InputCheck",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputCheck",
    additionalTypeImports: null,
    extends: ["InputHTMLAttributes<HTMLInputElement>"],
    previews: [
        { previewTitle: "Checkbox", demo: <InputCheckDemoCheckbox /> },
        { previewTitle: "Radio", demo: <InputCheckDemoRadio /> },
        { previewTitle: "Checkbox tile", demo: <InputCheckDemoCheckboxTile /> },
        { previewTitle: "Radio tile", demo: <InputCheckDemoRadioTile /> },
        {
            previewTitle: "Checkbox toggle",
            demo: <InputCheckDemoCheckboxToggle />,
        },
        {
            previewTitle: "Checkbox selector",
            demo: <InputCheckDemoCheckboxSelector />,
        },
    ],
}
