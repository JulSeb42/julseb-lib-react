/*=============================================== SpacersPage ===============================================*/

import { Page, StylesCard } from "../../components"
import { Grid } from "../../lib"
import { allSpacers } from "../../data"

export function SpacersPage() {
    return (
        <Page title="Spacers">
            <Grid col={2} gap="m">
                {allSpacers.map(s => (
                    <StylesCard variable={s} type="spacer" key={s.name} />
                ))}
            </Grid>
        </Page>
    )
}
