/*=============================================== PageLayout demo ===============================================*/

import { PageLayout, Text } from "../../lib"
import type { LibHeaderLink, LibFooterLink } from "../../lib/types"

const links: Array<LibHeaderLink> = [
    { text: "Link", to: "/" },
    { text: "Link", to: "/" },
]

export function PageLayoutDemo() {
    return (
        <PageLayout
            helmet={{ title: "Hello Page Layout" }}
            header={{ logo: "Demo Page Layout", links }}
            footer={{
                logo: "Demo",
                direction: "vertical",
                links: [...links, ...links] as Array<LibFooterLink>,
                withSeparator: true,
            }}
        >
            <Text tag="h1">Hello World</Text>
        </PageLayout>
    )
}
