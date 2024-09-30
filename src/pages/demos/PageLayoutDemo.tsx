/*=============================================== PageLayout demo ===============================================*/

import { useState, useEffect, type FC } from "react"
import { PageLayout, Text } from "../../lib"
import type { LibHeaderLink, LibFooterLink, LibMainSize } from "../../lib/types"

const links: Array<LibHeaderLink> = [
    { text: "Link", to: "/" },
    { text: "Link", to: "/" },
]

export const PageLayoutDemo: FC<{ mainSize?: LibMainSize }> = ({
    mainSize,
}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    return (
        <PageLayout
            isLoading={isLoading}
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

const Nav: FC = () => {
    return (
        <>
            <p>Hello</p>
            <p>World</p>
        </>
    )
}
