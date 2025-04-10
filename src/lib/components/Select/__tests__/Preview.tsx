import { useState } from "react"
import { Select } from "../Select"

export const SelectPreview = () => {
    const [selected, setSelected] = useState("selected")

    return (
        <Select
            data-testid="testid"
            className="className"
            value={selected}
            setValue={setSelected}
        />
    )
}

export const SelectWithOptions = () => {
    const items = ["react", "javascript", "scss", "css", "html"]
    const [selected, setSelected] = useState(items[0])

    return (
        <Select
            data-testid="testid"
            className="className"
            value={selected}
            setValue={setSelected}
            options={items}
        />
    )
}
