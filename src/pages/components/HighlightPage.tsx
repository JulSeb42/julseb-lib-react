/*=============================================== HighlightPage ===============================================*/

import { Page } from "../../components"
import { Highlight } from "../../lib"

export function HighlightPage() {
    return (
        <Page title="Highlight">
            <Highlight highlightedText="hello">Hello world</Highlight>
        </Page>
    )
}
