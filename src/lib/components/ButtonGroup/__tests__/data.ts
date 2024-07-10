/*=============================================== Data ===============================================*/

import type { LibButtonGroupItem } from "../../../types"

export const buttons: Array<LibButtonGroupItem> = [
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
