/*=============================================== InputImagePreview ===============================================*/

import { InputImage } from "../../../"
import {
    InputImageDemo,
    InputImageDemoWithValidation,
    InputImageDemoDisabled,
} from "./InputImage.demo"
import type { ILibInputImage } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputImagePreview: ComponentPreview<ILibInputImage> = {
    name: "InputImage",
    component: InputImage,
    category: "components",
    import: "InputImage",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputImage",
    additionalTypeImports: null,
    extends: [
        "InputHTMLAttributes<HTMLInputElement>",
        'Omit<ILibInputBase, "inputBackground" | "inputVariant">',
    ],
    previews: [
        { previewTitle: "Default", demo: <InputImageDemo /> },
        {
            previewTitle: "With validation",
            demo: <InputImageDemoWithValidation />,
        },
        { previewTitle: "Disabled", demo: <InputImageDemoDisabled /> },
    ],
}
