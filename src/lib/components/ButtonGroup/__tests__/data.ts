/*=============================================== Data ===============================================*/

import type {
    LibButtonGroupButtonItem,
    LibButtonGroupToggle,
} from "../../../types"

export const buttons: Array<LibButtonGroupButtonItem> = [
    {
        icons: { only: "arrow-left" },
        onClick: () => alert("Clicked"),
    },
    {
        text: "Button",
        onClick: () => alert("Clicked second"),
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
]

export const toggles: Array<LibButtonGroupToggle> = [
    { id: "bold", icon: "bold", value: false },
    { id: "italic", icon: "italic", value: false },
    { id: "strikethrough", icon: "strikethrough", value: false },
    { id: "underline", icon: "underline", value: false },
]
