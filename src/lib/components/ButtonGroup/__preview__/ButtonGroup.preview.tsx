import { capitalize } from "@julseb-lib/utils"
import { ButtonGroup } from "../../../"
import type {
    LibButtonGroupButtonItem,
    LibButtonGroupToggle,
} from "../../../types"
import type { ILibButtonGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const buttons: Array<LibButtonGroupButtonItem> = [
    {
        icons: { only: "arrow-left" },
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
        icons: { only: "arrow-right" },
        to: "/",
    },
]

const toggles: Array<LibButtonGroupToggle> = [
    { id: "bold", icon: "bold", value: false },
    { id: "italic", icon: "italic", value: false },
    { id: "strikethrough", icon: "strikethrough", value: false },
    { id: "underline", icon: "underline", value: false },
]

const textToggles: Array<LibButtonGroupToggle> = toggles.map(t => ({
    id: `text-${t.id}`,
    text: capitalize(t.icon?.toString() ?? ""),
    value: t.value,
}))

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
                "data-testid": "testid",
                className: "className",
                buttons,
                color: "secondary",
            },
        },
        {
            previewTitle: "Variant",
            props: {
                "data-testid": "testid",
                className: "className",
                buttons,
                variant: "ghost",
            },
        },
        {
            previewTitle: "Size",
            props: {
                "data-testid": "testid",
                className: "className",
                buttons,
                variant: "transparent",
                size: "small",
            },
        },
        {
            previewTitle: "With toggles",
            props: {
                "data-testid": "testid",
                className: "className",
                toggles,
                name: "toggles",
            },
        },
        {
            previewTitle: "With multi toggles",
            props: {
                "data-testid": "testid",
                className: "className",
                toggles: toggles.map(t => ({ ...t, id: `multi-${t.id}` })),
                name: "multi-toggles",
                toggleType: "multi",
                variant: "ghost",
                color: "secondary",
            },
        },
        {
            previewTitle: "With text toggles",
            props: {
                "data-testid": "testid",
                className: "className",
                toggles: textToggles,
                name: "text-toggles",
                variant: "transparent",
                size: "small",
            },
        },
    ],
}
