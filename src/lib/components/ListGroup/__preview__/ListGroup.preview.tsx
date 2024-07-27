/*=============================================== ListGroupPreview ===============================================*/

import { ListGroup } from "../../../"
import type { LibListGroupItem } from "../../../types"
import type { ILibListGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibListGroupItem> = [
    {
        text: "Item",
        className: "hello",
        "data-testid": "world",
    },
    {
        text: "Text",
        subtext: "Subtext",
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
        subtext: "Subtext",
        to: "/",
        blank: true,
    },
    {
        text: "Item",
        date: "2022-09-07",
        subtext: "Subtext",
        href: "#",
    },
    {
        text: "Item",
        date: "2022-09-07",
        subtext: "Subtext",
        onClick: () => alert("Clicked!"),
    },
    {
        text: "Item",
        date: "2022-09-07",
        onClick: () => alert("Clicked!"),
        disabled: true,
    },
]

export const listGroupPreview: ComponentPreview<ILibListGroup> = {
    name: "ListGroup",
    component: ListGroup,
    category: "components",
    import: "ListGroup",
    additionalImports: null,
    optionalImports: ["ListGroupItem"],
    propsImport: "ILibListGroup",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: { items, "data-testid": "testid", className: "className" },
        },
    ],
}
