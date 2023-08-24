/*=============================================== OverlaysPage ===============================================*/

import { Page, ColorCard } from "../../components"
import { Flexbox } from "../../lib"
import { allOverlays } from "../../data"

export function OverlaysPage() {
    return (
        <Page title="Overlays">
            <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                {allOverlays.map(o => (
                    <ColorCard overlay={o} key={o.css} />
                ))}
            </Flexbox>
        </Page>
    )
}
