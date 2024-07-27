/*=============================================== InputSliderPreview ===============================================*/

import { useState } from "react"
import { InputSlider } from "../../../"
import type { ILibInputSlider } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputSliderPreview: ComponentPreview<ILibInputSlider> = {
    name: "InputSlider",
    component: InputSlider,
    category: "components",
    import: "InputSlider",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInputSlider",
    additionalTypeImports: null,
    extends: [
        "nputHTMLAttributes<HTMLInputElement>",
        'Omit<ILibInputBase, "inputVariant">',
    ],
    previews: [
        {
            previewTitle: "Default",
            demo: (
                <InputSliderDemo data-testid="testid" className="className" />
            ),
        },
        {
            previewTitle: "With min & max",
            demo: (
                <InputSliderDemo
                    min={0}
                    max={100}
                    value={50}
                    showMinMax
                    data-testid="testid"
                    className="className"
                />
            ),
        },
    ],
}

function InputSliderDemo({ value = 50, ...rest }: ILibInputSlider) {
    const [inputValue, setInputValue] = useState(value)

    return (
        <div style={{ width: "100%" }}>
            <InputSlider
                {...rest}
                value={inputValue}
                onChange={e => setInputValue(Number(e.target.value))}
            />
        </div>
    )
}
