/*=============================================== DropdownPreview ===============================================*/

import { useState } from "react"
import { Dropdown, DropdownContainer, Button } from "../../../"
import type { LibDropdownItem } from "../../../types"
import type { ILibDropdown } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibDropdownItem> = [
    {
        text: "Link",
        to: "/",
    },
    {
        text: "Button",
        onClick: () => alert("Clicked"),
    },
    {
        text: "Button with icon",
        onClick: () => alert("Clicked icon"),
        icon: "mail",
    },
]

export const dropdownPreview: ComponentPreview<ILibDropdown> = {
    name: "Dropdown",
    component: Dropdown,
    category: "components",
    import: "Dropdown",
    additionalImports: null,
    optionalImports: ["DropdownContainer"],
    propsImport: "ILibDropdown",
    additionalTypeImports: ["LibDropdownItem"],
    extends: ["HTMLDivElement"],
    previews: [{ demo: <DropdownDemo /> }],
}

function DropdownDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer isOpen={isOpen}>
            <Button onClick={() => setIsOpen(!isOpen)}>Open</Button>
            <Dropdown
                items={items}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data-testid="testid.Dropdown"
            />
        </DropdownContainer>
    )
}
