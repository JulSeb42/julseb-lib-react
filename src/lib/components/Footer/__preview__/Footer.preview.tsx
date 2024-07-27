/*=============================================== FooterPreview ===============================================*/

import { Footer } from "../../../"
import type { LibFooterLink } from "../../../types"
import type { ILibFooter } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibFooterLink> = [
    {
        text: "Link",
        href: "#",
    },
    {
        text: "Router Link",
        to: "/",
    },
    {
        text: "Button",
        onClick: () => console.log("Clicked!"),
    },
    {
        text: "Button",
        onClick: () => console.log("Clicked!"),
    },
]

export const footerPreview: ComponentPreview<ILibFooter> = {
    name: "Footer",
    component: Footer,
    category: "components",
    import: "Footer",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibFooter",
    additionalTypeImports: ["LibFooterLink"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                logo: { text: "Hello" },
                items,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Vertical with logo",
            props: {
                items,
                logo: { img: "/images/logo-fajny-css.svg" },
                linksSeparator: "dash",
                direction: "vertical",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Vertical",
            props: {
                items,
                withSeparator: true,
                direction: "vertical",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
