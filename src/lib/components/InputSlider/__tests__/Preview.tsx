import { useState } from "react"
import { InputSlider } from "../InputSlider"

export const Preview = () => {
    const [value, setValue] = useState(50)

    return (
        <InputSlider
            data-testid="testid"
            className="className"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            min={0}
            max={100}
            showMinMax
        />
    )
}
