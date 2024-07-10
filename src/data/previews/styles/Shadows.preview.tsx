/*=============================================== ShadowsPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { StylesCard } from "../../../components"
import { Grid } from "../../../lib"
import { allShadows } from "../.."

function ShadowsPreview() {
    return (
        <Grid col={2} gap="m">
            {allShadows.map(shadow => (
                <StylesCard variable={shadow} type="shadow" key={shadow.css} />
            ))}
        </Grid>
    )
}

export const shadowsPreview: ComponentPreview<any, any> = {
    name: "Shadows",
    category: "styles",
    component: null,
    demos: [{ element: <ShadowsPreview key={0} /> }],
}
