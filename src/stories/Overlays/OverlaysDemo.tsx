/*=============================================== OverlaysDemo ===============================================*/

import { Flexbox } from "../../lib"
import { ColorCard, SbDemoLayout } from "../../components"
import { allOverlays } from "../../data"

export function OverlaysDemo() {
    return (
        <SbDemoLayout title="Overlays">
            <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                {allOverlays.map(o => (
                    <ColorCard overlay={o} key={o.css} />
                ))}
            </Flexbox>
        </SbDemoLayout>
    )
}
