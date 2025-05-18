import { Loader } from "../../../"
import { designTokens } from "../../../types"
import type { ILibLoader } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const loaderPreview: ComponentPreview<ILibLoader> = {
    name: "Loader",
    component: Loader,
    category: "components",
    import: "Loader",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibLoader",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        ...Object.values(designTokens.loaderVariants).map(v => ({
            previewTitle: `Variant ${v}`,
            props: {
                variant: v,
                "data-testid": "testid",
                className: "className",
            },
        })),
        {
            previewTitle: "With different size & color",
            props: {
                variant: 2,
                size: 120,
                color: "secondary",
                borderWidth: 4,
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
