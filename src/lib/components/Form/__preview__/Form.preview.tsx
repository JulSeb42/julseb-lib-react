/*=============================================== FormPreview ===============================================*/

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Form, Input } from "../../../"
import type {} from "../../../types"
import type { ILibForm } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const formPreview: ComponentPreview<ILibForm> = {
    name: "Form",
    component: Form,
    category: "components",
    import: "Form",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibForm",
    additionalTypeImports: null,
    extends: ["HTMLFormElement"],
    previews: [{ previewTitle: "Default", demo: <FormDemo /> }],
}

function FormDemo() {
    const [inputs, setInputs] = useState({
        name: "Jul",
        email: "a@b.com",
        password: "pass",
    })

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        })

    const resetForm = () =>
        setInputs({
            name: "",
            email: "",
            password: "",
        })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(inputs))
    }

    return (
        <Form
            buttonPrimary={{ text: "Submit", iconLeft: "send" }}
            buttonSecondary={{ text: "Reset", onClick: resetForm }}
            onSubmit={handleSubmit}
        >
            <Input
                id="name"
                label="Name"
                onChange={handleInputs}
                value={inputs.name}
            />
            <Input
                id="email"
                label="Email"
                type="email"
                onChange={handleInputs}
                value={inputs.email}
            />
            <Input
                id="password"
                label="Password"
                type="password"
                onChange={handleInputs}
                value={inputs.password}
            />
        </Form>
    )
}
