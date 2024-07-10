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

export const radiusesPreview: ComponentPreview<any, any> = {
    name: "Radiuses",
    category: "styles",
    component: null,
    demos: [{ element: <RadiusesPreview key={0} /> }],
}
