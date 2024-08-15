/*=============================================== DrawerPreview ===============================================*/

import { useState } from "react"
import { Link } from "react-router-dom"
import { Drawer, Button, Text, Flexbox } from "../../../"
import type { ILibDrawer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const drawerPreview: ComponentPreview<ILibDrawer> = {
    name: "Drawer",
    component: Drawer,
    category: "components",
    import: "Drawer",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibDrawer",
    additionalTypeImports: [],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", demo: <DrawerPreview /> },
        {
            previewTitle: "Position left",
            demo: <DrawerPreview position="left" />,
        },
        {
            previewTitle: "Other color",
            demo: (
                <DrawerPreview
                    backgroundColor="secondary"
                    contentColor="success"
                    linksColor="danger"
                />
            ),
        },
        {
            previewTitle: "With scroll enabled and esc disabled",
            demo: <DrawerPreview enableScrollingOpen disableEsc />,
        },
    ],
}

const links: Array<{ id: number; to: string; text: string }> = [
    { id: 0, text: "Link", to: "#" },
    { id: 1, text: "Link", to: "#" },
    { id: 2, text: "Link", to: "#" },
    { id: 3, text: "Link", to: "#" },
    { id: 4, text: "Link", to: "#" },
]

function DrawerPreview(props: Omit<ILibDrawer, "isOpen" | "setIsOpen">) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Flexbox>
            <Button onClick={() => setIsOpen(true)}>Open drawer</Button>
            <Drawer {...props} isOpen={isOpen} setIsOpen={setIsOpen}>
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
