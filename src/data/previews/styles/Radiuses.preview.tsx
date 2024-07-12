/*=============================================== RadiusesPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { StylesCard } from "../../../components"
import { Grid } from "../../../lib"
import { allRadiuses } from "../.."

function RadiusesPreview() {
    return (
        <Grid col={2} gap="m">
            {allRadiuses.map(s => (
                <StylesCard variable={s} type="radius" key={s.name} />
            ))}
        </Grid>
    )
}

export const radiusesPreview: ComponentPreview<null> = {
    name: "Radiuses",
    category: "styles",
    component: null,
    imports: "RADIUSES",
    typeImports: null,
    extends: null,
    previews: [{ demo: <RadiusesPreview /> }],
}
