/*=============================================== LinkPreview ===============================================*/

import { Link, Text } from "../../../"
import type { ILibLink } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkPreview: ComponentPreview<ILibLink> = {
    name: "Link",
    component: Link,
    category: "components",
    import: "Link",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibLink",
    additionalTypeImports: null,
    extends: ["HTMLAnchorElement", "HTMLButtonElement"],
    previews: [
        {
            previewTitle: "As button",
            demo: (
                <Text>
                    <Link onClick={() => alert("Clicked")}>Click me</Link>
                </Text>
            ),
        },
        {
            previewTitle: "As router link",
            demo: (
                <Text>
                    <Link to="/">Link to homepage</Link>
                </Text>
            ),
        },
        {
            previewTitle: "As router NavLink",
            demo: (
                <Text>
                    <Link to="/link" isNavLink>
                        Inspect for active class
                    </Link>
                </Text>
            ),
        },
        {
            previewTitle: "As anchor link",
            demo: (
                <Text>
                    <Link href="https://www.google.com" blank>
                        Link to external page
                    </Link>
                </Text>
            ),
        },
    ],
}
