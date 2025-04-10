import { SrOnly } from "../../../"
import type { ILibSrOnly } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const srOnlyPreview: ComponentPreview<ILibSrOnly> = {
    name: "SrOnly",
    component: SrOnly,
    category: "components",
    import: "SrOnly",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibSrOnly",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                children: "Hello",
                as: "h1",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
