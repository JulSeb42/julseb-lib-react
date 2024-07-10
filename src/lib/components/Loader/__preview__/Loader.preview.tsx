/*=============================================== LoaderPreview ===============================================*/

import { Loader } from "../../../"
import { typeValues } from "../../../types"
import type { LoaderProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const loaderPreview: ComponentPreview<LoaderProps> = {
    name: "Loader",
    component: Loader,
    category: "components",
    imports: ["Loader"],
    typeImports: ["LoaderProps"],
    extends: ["HTMLSpanElement"],
    props: [
        ...Object.values(typeValues.loaderVariants).map(v => ({
            previewTitle: `Variant ${v}`,
            variant: v,
        })),
        {
            previewTitle: "With different size & color",
            variant: 2,
            size: 120,
            color: "secondary",
            borderWidth: 4,
        },
    ],
}
