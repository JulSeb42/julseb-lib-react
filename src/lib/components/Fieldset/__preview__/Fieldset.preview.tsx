/*=============================================== FieldsetPreview ===============================================*/

import { Fieldset, InputCheck, Input } from "../../../"
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
    ],
}

function ChildrenCheck() {
    return (
        <>
            <InputCheck
                id="hello"
                name="inputs-check"
                type="radio"
                label="Hello"
            />
            <InputCheck
                id="world"
                name="inputs-check"
                type="radio"
                label="World"
            />

            <InputCheck id="foo" name="inputs-check" type="radio" label="Foo" />

            <InputCheck id="baz" name="inputs-check" type="radio" label="Baz" />
        </>
    )
}

function ChildrenText() {
    return (
        <>
            <Input label="Name" />
            <Input label="Email" type="email" />
        </>
    )
}
