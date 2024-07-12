/*=============================================== LoaderPreview ===============================================*/

import { Loader } from "../../../"
import { typeValues } from "../../../types"
import type { LoaderProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const loaderPreview: ComponentPreview<LoaderProps> = {
    name: "Loader",
    component: Loader,
    category: "components",
    import: "Loader",
    additionalImports: null,
    optionalImports: null,
    propsImport: "LoaderProps",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        ...Object.values(typeValues.loaderVariants).map(v => ({
            previewTitle: `Variant ${v}`,
            props: { variant: v },
        })),
        {
            previewTitle: "With different size & color",
            props: {
                variant: 2,
                size: 120,
                color: "secondary",
                borderWidth: 4,
            },
        },
    ],
}
