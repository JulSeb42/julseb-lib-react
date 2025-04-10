import { Hr } from "../../../"
import type { ILibHr } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const hrPreview: ComponentPreview<ILibHr> = {
    name: "Hr",
    component: Hr,
    category: "components",
    import: "Hr",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibHr",
    additionalTypeImports: null,
    extends: ["HTMLHRElement"],
    previews: [
        {
            previewTitle: "Default",
            props: { "data-testid": "testid", className: "className" },
        },
        {
            previewTitle: "Rounded",
            props: {
                "data-testid": "testid",
                className: "className",
                isRounded: true,
                height: 5,
            },
        },
    ],
}
