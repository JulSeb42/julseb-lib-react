import { Fieldset } from "../../../"
import { ChildrenCheck, ChildrenCheckValidate, ChildrenText } from "./Previews"
import type { ILibFieldset } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const fieldsetPreview: ComponentPreview<ILibFieldset> = {
    name: "Fieldset",
    component: Fieldset,
    category: "components",
    import: "Fieldset",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibFieldset",
    additionalTypeImports: null,
    extends: ["HTMLFieldSetElement"],
    previews: [
        {
            previewTitle: "With check inputs",
            props: { legend: "Favourite word?", children: <ChildrenCheck /> },
        },
        {
            previewTitle: "With text inputs",
            props: {
                legend: "User information",
                children: <ChildrenText />,
                flexDirection: "column",
                alignItems: "stretch",
            },
        },
        {
            previewTitle: "With validation",
            props: {
                legend: "Favourite word?",
                children: <ChildrenCheckValidate />,
                validation: { status: false, message: "This is required." },
            },
        },
    ],
}
