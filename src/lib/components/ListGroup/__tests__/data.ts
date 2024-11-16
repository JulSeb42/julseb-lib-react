/*=============================================== ListGroup data ===============================================*/

import type { LibListGroupItem } from "../../../types"

export const listGroupData: Array<LibListGroupItem> = [
    {
        text: "Item",
    },
    {
        text: "Text",
        body: "Subtext",
    },
    {
        text: "Item",
        badge: {
            number: 350,
            backgroundColor: "danger",
            contentColor: "white",
        },
    },
    {
        text: "Item",
        badge: {
            icon: "star",
            backgroundColor: "success",
            contentColor: "white",
        },
    },
    {
        text: "Item",
        badge: { backgroundColor: "warning", contentColor: "white" },
    },
    {
        text: "Router link",
        date: "2022-09-07",
        body: "Subtext",
        to: "/",
        blank: true,
    },
    {
        text: "Link",
        date: "2022-09-07",
        body: "Subtext",
        href: "#",
    },
    {
        text: "Button",
        date: "2022-09-07",
        body: "Subtext",
        onClick: () => alert("Clicked!"),
    },
    {
        text: "Button disabled",
        date: "2022-09-07",
        onClick: () => alert("Clicked!"),
        disabled: true,
    },
]
