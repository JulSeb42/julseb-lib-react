/*=============================================== AccordionPreview ===============================================*/

import { Accordion } from "../Accordion"
import type { AccordionProps } from "../types"
import type { ComponentPreview } from "../../../../data/components"
import type { LibAccordionItem } from "../../../types"

const items: Array<LibAccordionItem> = [
    {
        title: "Item",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
        defaultOpen: true,
        className: "className",
        "data-testid": "dataTestId",
    },
    {
        title: "Item",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
    },
    {
        title: "Item",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
        "data-testid": "",
    },
]

export const accordionPreview: ComponentPreview<AccordionProps> = {
    name: "Accordion",
    component: Accordion,
    category: "components",
    import: "Accordion",
    additionalImports: null,
    optionalImports: ["AccordionItem"],
    propsImport: "AccordionProps",
    additionalTypeImports: ["LibAccordionItem"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Basic",
            props: {
                items,
                variant: "basic",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Rounded",
            props: { items, variant: "rounded", icon: "chevron" },
        },
    ],
}
