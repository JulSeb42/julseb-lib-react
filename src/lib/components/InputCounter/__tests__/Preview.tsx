/*=============================================== InputCounter preview ===============================================*/

import { useState } from "react"
import { InputCounter } from "../InputCounter"

export function Preview() {
    const [counter, setCounter] = useState(0)

    return (
        <InputCounter
            data-testid="testid"
            className="className"
            value={counter}
            setValue={setCounter}
        />
    )
}

export function PreviewNotEditable() {
    const [counter, setCounter] = useState(0)

    return (
        <InputCounter
            data-testid="testid"
            value={counter}
            setValue={setCounter}
            isInputEditable={false}
        />
    )
}

export function PreviewMinMax() {
    const [counter, setCounter] = useState(1)

    return (
        <InputCounter
            data-testid="testid"
            value={counter}
            setValue={setCounter}
            min={1}
            max={5}
            step={3}
        />
    )
}

export function PreviewTooltip() {
    const [counter, setCounter] = useState(1)

    return (
        <InputCounter
            data-testid="testid"
            value={counter}
            setValue={setCounter}
            showButtonTooltip
        />
    )
}
