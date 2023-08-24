/*=============================================== KeyPage ===============================================*/

import { Page } from "../../components"
import { Key } from "../../lib"

export function KeyPage() {
    const keys = ["⌘", "K"]

    return (
        <Page title="Key">
            <Key keys={keys} size="large" />
            <Key keys={keys} size="small" />
            <Key keys={keys} size="large" withSeparator />
            <Key keys={keys} size="small" withSeparator />
        </Page>
    )
}
