/*=============================================== InputPhonePreview ===============================================*/

import { useState, type ChangeEvent, type FormEvent } from "react"
import { InputPhone } from "../../../"
import type { LibCountry } from "../../../types"
import type { ILibInputPhone } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPhonePreview: ComponentPreview<ILibInputPhone> = {
    name: "InputPhone",
    component: InputPhone,
    category: "components",
    import: "InputPhone",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputPhone",
    additionalTypeImports: null,
    extends: [
        "HTMLInputElement",
        "ILibInputBase",
        "ILibInputValidationIconComponent",
    ],
    previews: [{ previewTitle: "Default", demo: <InputPhoneDemo /> }],
}

function InputPhoneDemo() {
    const [selectedCountry, setSelectedCountry] = useState<
        LibCountry | undefined
    >(undefined)

    const [phone, setPhone] = useState("")
    const [result, setResult] = useState("")
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResult(`${selectedCountry?.dial_code || "+49"}${phone}`)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 16,
                    width: "100%",
                }}
            >
                <InputPhone
                    id="phone"
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    value={phone}
                    onChange={handlePhone}
                    data-testid="testid"
                    className="className"
                />

                <button type="submit">Submit</button>
            </form>
            {result && <p>{result}</p>}
        </>
    )
}
