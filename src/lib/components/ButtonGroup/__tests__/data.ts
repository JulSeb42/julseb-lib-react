/*=============================================== Data ===============================================*/

import type { LibButtonGroupButtonItem } from "../../../types"

export const buttons: Array<LibButtonGroupButtonItem> = [
    {
        iconOnly: "arrow-left",
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
