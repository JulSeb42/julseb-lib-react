/*=============================================== ColorsPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { ColorCard } from "../../../components"
import { Flexbox } from "../../../lib"
import { allOverlays } from "../.."

function ColorsPreview() {
    return (
        <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
            {allOverlays.map(o => (
                <ColorCard overlay={o} key={o.css} />
            ))}
        </Flexbox>
    )
}

export const overlaysPreview: ComponentPreview<any, any> = {
    name: "Overlays",
    category: "styles",
    component: null,
    demos: [{ element: <ColorsPreview key={1} /> }],
}
