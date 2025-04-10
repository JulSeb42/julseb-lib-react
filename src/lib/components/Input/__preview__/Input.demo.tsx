import { useState, type ChangeEvent } from "react"
import { Input } from "../../../"
import type { LibValidationStatus } from "../../../types"

export const InputDemoValidation = () => {
    const [input, setInput] = useState("")
    const [validation, setValidation] = useState<LibValidationStatus>(undefined)

    const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)

        if (e.target.value.length > 3) {
            setValidation(true)
        } else {
            setValidation(false)
        }
    }

    return (
        <Input
            id="validation"
            validation={{
                status: validation,
                message: "Validation message",
            }}
            value={input}
            onChange={handleValidate}
            data-testid="testid"
            className="className"
            prefix="Prefix"
            suffix="Suffix"
        />
    )
}

export const InputDemoCounter = () => {
    const [input, setInput] = useState("")

    return (
        <Input
            label="Input with counter"
            counter
            maxLength={140}
            value={input}
            onChange={e => setInput(e.target.value)}
            data-testid="testid"
            className="className"
            prefix="Prefix"
            suffix="Suffix"
        />
    )
}

export const InputSearch = () => {
    const [value, setValue] = useState("")

    return (
        <Input
            data-testid="testid"
            className="className"
            id="search"
            type="search"
            value={value}
            onChange={e => setValue(e.target.value)}
            clearSearch={() => setValue("")}
            icon="search"
            focusKeys={["Command", "KeyJ"]}
            showKeys
        />
    )
}
