/*=============================================== InputDemo ===============================================*/

import { useState, type ChangeEvent } from "react"
import { Input } from "../../../"
import type { LibValidationStatus } from "../../../types"

export function InputDemoValidation() {
    const [input, setInput] = useState("")
    const [validation, setValidation] =
        useState<LibValidationStatus>(false)

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
        />
    )
}

export function InputDemoCounter() {
    const [input, setInput] = useState("")

    return (
        <Input
            label="Input with counter"
            counter
            maxLength={140}
            value={input}
            onChange={e => setInput(e.target.value)}
        />
    )
}
