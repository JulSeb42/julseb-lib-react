/*=============================================== DropdownPreview ===============================================*/

import { useState } from "react"
import { DropdownContainer, Dropdown, Button } from "../../../"
import type { LibDropdownItem } from "../../../types"

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

export function Preview() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer
            isOpen={isOpen}
            data-testid="testid"
            className="className"
        >
            <Button onClick={() => setIsOpen(!isOpen)} data-testid="Button">
                Open dropdown
            </Button>

            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                items={items}
                data-testid="testid.Dropdown"
                className="Dropdown"
            />
        </DropdownContainer>
    )
}

export function PreviewDirection() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer
            isOpen={isOpen}
            data-testid="testid"
            className="className"
            justifyContent="flex-end"
        >
            <Button onClick={() => setIsOpen(!isOpen)} data-testid="Button">
                Open dropdown
            </Button>

            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                items={items}
                data-testid="testid.Dropdown"
                className="Dropdown"
                direction="up"
                positionFromButton={48}
                maxHeightOpen={100}
            />
        </DropdownContainer>
    )
}

export function PreviewColor() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer
            isOpen={isOpen}
            data-testid="testid"
            className="className"
            justifyContent="flex-end"
        >
            <Button
                onClick={() => setIsOpen(!isOpen)}
                data-testid="Button"
                color="danger"
            >
                Open dropdown
            </Button>

            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                items={items}
                data-testid="testid.Dropdown"
                className="Dropdown"
                accentColor="danger"
            />
        </DropdownContainer>
    )
}
