/*=============================================== SectionPage ===============================================*/

import { Page } from "../../components"
import { Section, Text } from "../../lib"

import type { LibSpacers } from "../../lib/types"

export function SectionPage() {
    const sizes: LibSpacers[] = ["xxl", "xl", "l", "m", "s", "xs", "xxs", 100]

    return (
        <Page title="Section">
            {sizes.map(size => (
                <Section gap={size} key={size}>
                    <Text tag="h4">Gap {size}</Text>
                    <Text>Content</Text>
                </Section>
            ))}
        </Page>
    )
}
