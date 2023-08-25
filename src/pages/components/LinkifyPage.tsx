/*=============================================== LinkifyPage ===============================================*/

import { Page } from "../../components"
import { Linkify } from "../../lib"

export function LinkifyPage() {
    return (
        <Page title="Linkify">
            <Linkify blank>
                Hello world https://julien-sebag.com/ foo baz
            </Linkify>
        </Page>
    )
}
