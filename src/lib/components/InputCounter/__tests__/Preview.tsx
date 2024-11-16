/*=============================================== InputCounter preview ===============================================*/

import { useState } from "react"
import { InputCounter } from "../InputCounter"

export const Preview = () => {
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

export const PreviewNotEditable = () => {
    const [counter, setCounter] = useState(0)

    return (
        <InputCounter
            data-testid="testid"
            value={counter}
            setValue={setCounter}
            inputNoEdit
        />
    )
}

export const PreviewMinMax = () => {
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

export const PreviewTooltip = () => {
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
