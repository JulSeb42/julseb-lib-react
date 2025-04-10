import { useState, type FormEvent } from "react"
import { InputPin, Form } from "../../../"
import type { LibValueInputPin } from "../../../types"
import type { ILibInputPin } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const InputPinDemo = (props: Omit<ILibInputPin, "values" | "setValues">) => {
    const [values, setValues] = useState<LibValueInputPin>({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const [validation, setValidation] = useState<undefined | boolean>(undefined)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(values).filter(v => v === "").length) {
            setValidation(false)
            return
        } else {
            setValidation(undefined)
            alert(`Pin: ${Object.values(values).join("")}`)
            setValues({ 0: "", 1: "", 2: "", 3: "" })
            return
        }
    }

    return (
        <Form buttonPrimary="Save" onSubmit={handleSubmit}>
            <InputPin
                {...props}
                values={values}
                setValues={setValues}
                validation={
                    validation !== undefined
                        ? {
                              status: validation,
                              message: "All inputs are required.",
                          }
                        : undefined
                }
            />
        </Form>
    )
}

export const inputPinPreview: ComponentPreview<ILibInputPin> = {
    name: "InputPin",
    component: InputPin,
    category: "components",
    import: "InputPin",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputPin",
    additionalTypeImports: ["LibValueInputPin"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            demo: <InputPinDemo placeholders={["0", "0", "0", "0"]} />,
        },
        {
            previewTitle: "With hidden values",
            demo: (
                <InputPinDemo
                    placeholders={["0", "0", "0", "0"]}
                    container={{ justifyContent: "flex-start" }}
                    hideValues
                />
            ),
        },
        {
            previewTitle: "Disabled",
            demo: (
                <InputPinDemo
                    placeholders={["0", "0", "0", "0"]}
                    container={{ justifyContent: "flex-start" }}
                    disabled
                />
            ),
        },
    ],
}
