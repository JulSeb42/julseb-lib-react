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
    import: "InputCheck", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibInputCheck", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLInputElement"],
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
