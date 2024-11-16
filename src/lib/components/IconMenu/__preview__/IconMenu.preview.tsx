/*=============================================== IconMenuPreview ===============================================*/

import { IconMenu } from "../../../"
import { Check } from "../../../icons"
import type { LibIconMenuItem } from "../../../types"
import type { ILibIconMenu } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibIconMenuItem> = [
    { icon: "edit", href: "/", label: "href" },
    { icon: <Check />, to: "/", label: "to" },
    { icon: "show", onClick: () => alert("Clicked"), label: "onClick" },
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
        {
            previewTitle: "Default",
            props: { items, "data-testid": "testid", className: "className" },
        },
        {
            previewTitle: "With burger",
            props: {
                items,
                icon: "burger",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Secondary color",
            props: {
                items,
                color: "secondary",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Fixed",
            props: {
                items,
                position: { position: "fixed", top: "xxl", right: "xxl" },
                direction: "down",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
