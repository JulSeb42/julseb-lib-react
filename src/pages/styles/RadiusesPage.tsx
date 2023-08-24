/*=============================================== RadiusesPage ===============================================*/

import { Page, StylesCard } from "../../components"
import { Grid } from "../../lib"
import { allRadiuses } from "../../data/styles/all-radiuses"

export function RadiusesPage() {
    return (
        <Page title="Radiuses">
            <Grid col={2} gap="m">
                {allRadiuses.map(r => (
                    <StylesCard variable={r} type="radius" key={r.css} />
                ))}
            </Grid>
        </Page>
    )
}
