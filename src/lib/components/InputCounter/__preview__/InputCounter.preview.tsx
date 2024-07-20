/*=============================================== InputCounterPreview ===============================================*/

import { useState } from "react"
import { InputCounter } from "../../../"
import type {} from "../../../types"
import type { ILibInputCounter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputCounterPreview: ComponentPreview<ILibInputCounter> = {
    name: "InputCounter",
    component: InputCounter,
    category: "components",
    import: "InputCounter",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibInputCounter",
    additionalTypeImports: [],
    extends: ["InputHTMLAttributes<HTMLInputElement>", "ILibInputBase"],
    previews: [{ previewTitle: "Default", demo: <InputCounterDemo /> }],
}

function InputCounterDemo() {
    const [counter, setCounter] = useState(1)

    return (
        <InputCounter
            value={counter}
            setValue={setCounter}
            // showButtonTooltip
            // data-testid="testid"
            // className="className"
        />
    )
}
