/*=============================================== ButtonGroupPreview ===============================================*/

import { ButtonGroup } from "../../../"
import type { LibButtonGroupItem } from "../../../types"
import type { ILibButtonGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const buttons: Array<LibButtonGroupItem> = [
    {
        iconOnly: "arrow-left",
        disabled: true,
    },
    {
        text: "Button",
        onClick: () => alert("Clicked"),
    },
    {
        text: "Button",
        onClick: () => console.log("Clicked"),
    },
    {
        text: "Link",
        href: "http://google.com",
        blank: true,
    },
    {
        text: "Router Link",
        to: "/",
    },
    {
        iconOnly: "arrow-right",
        to: "/",
    },
]

export const buttonGroupPreview: ComponentPreview<ILibButtonGroup> = {
    name: "ButtonGroup",
    component: ButtonGroup,
    category: "components",
    import: "ButtonGroup",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibButtonGroup",
    additionalTypeImports: ["LibButtonGroupItem"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: { buttons, "data-testid": "testid", className: "className" },
        },
        {
            previewTitle: "Color",
            props: {
                buttons,
                color: "secondary",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Variant",
            props: {
                buttons,
                variant: "ghost",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Size",
            props: {
                buttons,
                variant: "transparent",
                size: "small",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
