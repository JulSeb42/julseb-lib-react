/*=============================================== Input tests previews ===============================================*/

import { useState, type ChangeEvent } from "react"
import { Input } from "../../.."
import { SITE_DATA } from "../../../../data"

export function InputPropsPreview() {
    const [input, setInput] = useState("")

    return (
        <Input
            data-testid="testid"
            className="className"
            label="Label"
            helper="Helper"
            helperBottom={{
                text: "Helper bottom",
                textColor: "secondary",
                icon: "chevron-left",
                iconColor: "warning",
                fontStyle: "oblique",
                iconSize: 24,
            }}
            counter
            maxLength={8}
            validation={{
                status: false,
                message: "Validation message",
            }}
            icon="mail"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
            }
            iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
        />
    )
}

export function InputSearchPreview() {
    const [search, setSearch] = useState("")

    return (
        <Input
            data-testid="testid"
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            clearSearch={() => setSearch("")}
        />
    )
}
