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

function ChildrenCheckValidate() {
    return (
        <>
            <InputCheck
                id="hello-validate"
                name="inputs-check"
                type="radio"
                label="Hello"
                validation={false}
            />
            <InputCheck
                id="world-validate"
                name="inputs-check"
                type="radio"
                label="World"
                validation={false}
            />

            <InputCheck
                id="foo-validate"
                name="inputs-check"
                type="radio"
                label="Foo"
                validation={false}
            />

            <InputCheck
                id="baz-validate"
                name="inputs-check"
                type="radio"
                label="Baz"
                validation={false}
            />
        </>
    )
}
