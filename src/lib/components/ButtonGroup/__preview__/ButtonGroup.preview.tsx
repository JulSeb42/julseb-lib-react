/*=============================================== ButtonGroupPreview ===============================================*/

import { ButtonGroup } from "../../../"
import type { LibButtonGroupItem } from "../../../types"
import type { ButtonGroupProps } from "../../../types/components-props"
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

export const buttonGroupPreview: ComponentPreview<ButtonGroupProps> = {
    name: "ButtonGroup",
    component: ButtonGroup,
    category: "components",
    import: "ButtonGroup",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ButtonGroupProps",
    additionalTypeImports: ["LibButtonGroupItem"],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { buttons } },
        { previewTitle: "Color", props: { buttons, color: "secondary" } },
        { previewTitle: "Variant", props: { buttons, variant: "ghost" } },
        {
            previewTitle: "Size",
            props: { buttons, variant: "transparent", size: "small" },
        },
    ],
}
