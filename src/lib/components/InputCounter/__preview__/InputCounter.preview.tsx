import { useState } from "react"
import { InputCounter } from "../../../"
import type { ILibInputCounter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const InputCounterDemo = ({ ...rest }: Partial<ILibInputCounter>) => {
    const [counter, setCounter] = useState(1)

    return (
        <InputCounter
            {...rest}
            value={counter}
            setValue={setCounter}
            data-testid="testid"
            className="className"
            // showButtonTooltip
            // data-testid="testid"
            // className="className"
        />
    )
}

export const inputCounterPreview: ComponentPreview<ILibInputCounter> = {
    name: "InputCounter",
    component: InputCounter,
    category: "components",
    import: "InputCounter",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputCounter",
    additionalTypeImports: null,
    extends: ["InputHTMLAttributes<HTMLInputElement>", "ILibInputBase"],
    previews: [
        { previewTitle: "Default", demo: <InputCounterDemo /> },
        {
            previewTitle: "Input not editable",
            demo: <InputCounterDemo inputNoEdit />,
        },
    ],
}
