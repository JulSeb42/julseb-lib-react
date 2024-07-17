/*=============================================== InputImagePreview ===============================================*/

import { InputImage } from "../../../"
import {
    InputImageDemo,
    InputImageDemoWithValidation,
    InputImageDemoDisabled,
} from "./InputImage.demo"
import type {} from "../../../types"
import type { ILibInputImage } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputImagePreview: ComponentPreview<ILibInputImage> = {
    name: "InputImage",
    component: InputImage,
    category: "components",
    import: "InputImage", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibInputImage", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["InputHTMLAttributes<HTMLInputElement>"],
    previews: [
        { previewTitle: "Default", demo: <InputImageDemo /> },
        {
            previewTitle: "With validation",
            demo: <InputImageDemoWithValidation />,
        },
        { previewTitle: "Disabled", demo: <InputImageDemoDisabled /> },
    ],
}
