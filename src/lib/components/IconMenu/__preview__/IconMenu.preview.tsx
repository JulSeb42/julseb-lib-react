/*=============================================== IconMenuPreview ===============================================*/

import { IconMenu } from "../../../"
import { Check } from "../../../icons"
import type { LibIconMenuItem } from "../../../types"
import type { ILibIconMenu } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibIconMenuItem> = [
    { icon: "edit", href: "/", label: "Button" },
    { icon: <Check />, to: "/", label: "Button" },
    { icon: "show", onClick: () => alert("Clicked"), label: "Button" },
]

export const iconMenuPreview: ComponentPreview<ILibIconMenu> = {
    name: "IconMenu",
    component: IconMenu,
    category: "components",
    import: "IconMenu",
    additionalImports: null,
    optionalImports: ["IconMenuItem"],
    propsImport: "ILibIconMenu",
    additionalTypeImports: ["LibIconMenuItem"],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { items } },
        { previewTitle: "With burger", props: { items, icon: "burger" } },
        {
            previewTitle: "Secondary color",
            props: { items, color: "secondary" },
        },
        {
            previewTitle: "Fixed",
            props: {
                items,
                position: { position: "fixed", top: "xxl", right: "xxl" },
                direction: "down",
            },
        },
    ],
}
