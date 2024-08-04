/*=============================================== InputPin tests preview ===============================================*/

import { useState } from "react"
import { InputPin } from "../"
import type { ILibInputPin } from "../types"
import type { LibValueInputPin } from "../../../types"

export function InputPinPreview(
    props: Omit<
        ILibInputPin,
        "values" | "setValues" | "data-testid" | "className"
    >
) {
    const [values, setValues] = useState<LibValueInputPin>({
        0: "",
        1: "",
        2: "",
        3: "",
    })

    return (
        <InputPin
            {...props}
            data-testid="testid"
            className="className"
            values={values}
            setValues={setValues}
        />
    )
}
