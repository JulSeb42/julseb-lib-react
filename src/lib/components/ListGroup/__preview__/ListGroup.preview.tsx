/*=============================================== ListGroupPreview ===============================================*/

import { convertDateShort } from "ts-utils-julseb"
import { ListGroup } from "../../../"
import type { LibListGroupItem } from "../../../types"
import type { ILibListGroup } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibListGroupItem> = [
    {
        text: "Basic item",
        className: "hello",
        "data-testid": "world",
    },
    {
        text: "With text",
        subtext: "And subtext",
    },
    {
        text: "With badge and number",
        badge: {
            number: 350,
            backgroundColor: "danger",
            contentColor: "white",
        },
    },
    {
        text: "With badge and icon",
        badge: {
            icon: "star",
            backgroundColor: "success",
            contentColor: "white",
        },
    },
    {
        text: "With color badge",
        badge: { backgroundColor: "warning", contentColor: "white" },
    },
    {
        text: "Router link",
        date: convertDateShort("2022-09-07"),
        subtext: "Subtext",
        to: "/",
        blank: true,
    },
    {
        text: "Anchor link",
        date: convertDateShort("2022-09-07"),
        subtext: "Subtext",
        href: "#",
    },
    {
        text: "Button",
        date: convertDateShort("2022-09-07"),
        subtext: "Subtext",
        onClick: () => alert("Clicked!"),
    },
    {
        text: "Button disabled",
        date: convertDateShort("2022-09-07"),
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
            props: {
                items,
                "data-testid": "testid",
                className: "className",
                title: "Hello World",
            },
        },
        {
            previewTitle: "With maxHeight",
            props: {
                items,
                maxHeight: 200,
                title: {
                    text: "Hello World",
                    isFixed: true,
                    shadowOnScroll: "xl",
                    backgroundColor: "black",
                    contentColor: "white",
                },
                noSeparator: true,
            },
        },
    ],
}
