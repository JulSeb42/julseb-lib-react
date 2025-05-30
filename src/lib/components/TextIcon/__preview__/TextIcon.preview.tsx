import { TextIcon } from "../../../"
import type { ILibTextIcon } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const textIconPreview: ComponentPreview<ILibTextIcon> = {
    name: "TextIcon",
    component: TextIcon,
    category: "components",
    import: "TextIcon",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTextIcon",
    additionalTypeImports: null,
    extends: ["ILibText"],
    previews: [
        {
            props: {
                icon: "arrow-right",
                tag: "h3",
                gap: "l",
                children: "Hello",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
