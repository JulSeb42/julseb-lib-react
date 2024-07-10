/*=============================================== SpacersPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { StylesCard } from "../../../components"
import { Grid } from "../../../lib"
import { allSpacers } from "../.."

function SpacersPreview() {
    return (
        <Grid col={2} gap="m">
            {allSpacers.map(s => (
                <StylesCard variable={s} type="spacer" key={s.name} />
            ))}
        </Grid>
    )
}

export const spacersPreview: ComponentPreview<null> = {
    name: "Spacers",
    category: "styles",
    component: null,
    imports: "SPACERS",
    typeImports: null,
    extends: null,
    demos: [{ element: <SpacersPreview /> }],
}
