/*=============================================== Drawer tests preview ===============================================*/

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Flexbox, Text, Drawer } from "../../.."
import type { ILibDrawer } from "../types"

const links: Array<{ id: number; to: string; text: string }> = [
    { id: 0, text: "Link", to: "#" },
    { id: 1, text: "Link", to: "#" },
    { id: 2, text: "Link", to: "#" },
    { id: 3, text: "Link", to: "#" },
    { id: 4, text: "Link", to: "#" },
]

export function DrawerPreview(props: Omit<ILibDrawer, "isOpen" | "setIsOpen">) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Flexbox>
            <Button onClick={() => setIsOpen(true)} data-testid="ButtonOpen">
                Open drawer
            </Button>

            <Drawer
                {...props}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data-testid="testid"
                className="className"
                tabIndex={0}
            >
                {links.map(link => (
                    <Link key={link.id} to={link.to}>
                        {link.text}
                    </Link>
                ))}
                <Text>Text</Text>
                <button>Button</button>
            </Drawer>
        </Flexbox>
    )
}
