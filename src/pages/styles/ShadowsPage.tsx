/*=============================================== ShadowsPage ===============================================*/

import { Page, StylesCard } from "../../components"
import { Grid } from "../../lib"
import { allShadows } from "../../data"

export function ShadowsPage() {
    return (
        <Page title="Shadows">
            <Grid col={2} gap="m">
                {allShadows.map(shadow => (
                    <StylesCard
                        variable={shadow}
                        type="shadow"
                        key={shadow.css}
                    />
                ))}
            </Grid>
        </Page>
    )
}
