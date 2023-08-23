/*=============================================== OverlaysPage ===============================================*/

import { Page, ColorCard } from "../../components"

import { allOverlays } from "../../data"

export function OverlaysPage() {
    return (
        <Page title="Overlays">
            {allOverlays.map(o => (
                <ColorCard overlay={o} key={o.css} />
            ))}
        </Page>
    )
}
