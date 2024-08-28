/*=============================================== PageLayout demo ===============================================*/

import { PageLayout, Text } from "../../lib"
import type { LibHeaderLink, LibFooterLink, LibMainSize } from "../../lib/types"

const links: Array<LibHeaderLink> = [
    { text: "Link", to: "/" },
    { text: "Link", to: "/" },
]

export function PageLayoutDemo({ mainSize }: { mainSize?: LibMainSize }) {
    return (
        <PageLayout
            isLoading={true}
            helmet={{
                title: "Hello Page Layout",
                keywords: ["Hello", "World"],
            }}
            header={{
                logo: "Demo Page Layout",
                links,
                nav: <Nav />,
            }}
            footer={{
                logo: "Demo",
                direction: "vertical",
                links: [...links, ...links] as Array<LibFooterLink>,
                withSeparator: true,
            }}
            main={{ size: mainSize }}
        >
            <Text tag="h1">Hello World</Text>
        </PageLayout>
    )
}

function Nav() {
    return (
        <>
            <p>Hello</p>
            <p>World</p>
        </>
    )
}
