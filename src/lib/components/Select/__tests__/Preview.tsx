/*=============================================== Select preview ===============================================*/

import { useState } from "react"
import { Select } from "../Select"

export function SelectPreview() {
    const [selected, setSelected] = useState("selected")

    return (
        <Select
            data-testid="testid"
            className="className"
            selected={selected}
            setSelected={setSelected}
        />
    )
}

export function SelectWithOptions() {
    const items = ["react", "javascript", "scss", "css", "html"]
    const [selected, setSelected] = useState(items[0])

    return (
        <Select
            data-testid="testid"
            className="className"
            selected={selected}
            setSelected={setSelected}
            options={items}
        />
    )
}
