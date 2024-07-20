/*=============================================== Homepage ===============================================*/

import { Text } from "../lib"
import { Page } from "../components"

export function Homepage() {
    const pages: Array<string> = [
        "Progress Circle",
        "Tabs",
        "Slideshow",
        "Cover",
        "Table",
        "Page Loading",
        "Sticky",
        "Messaging",
        "Markdown Editor",
        "Markdown Container",
        "Code Container",
        "Fade",
        "Back To Top",
        "Header",
        "Icon Menu",
        "Footer",
        "Helmet",
        "Helpers",
        "Sr Only",
        "Variables",
        "Mixins",
        "Js Utils",
        "Options Markdown",
        "Hooks",
    ]

    return (
        <Page title="Homepage">
            <Text tag="h3">Components left</Text>

            <Text tag="ul">
                {pages.map(p => (
                    <li key={p}>{p}</li>
                ))}
            </Text>
        </Page>
    )
}
