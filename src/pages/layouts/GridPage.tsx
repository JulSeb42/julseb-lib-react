/*=============================================== GridPage ===============================================*/

import { Page, GridItem } from "../../components"
import { Grid } from "../../lib"

export function GridPage() {
    return (
        <Page title="Grid">
            <Grid col={3} columnGap="s" rowGap="xxl">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </Grid>
        </Page>
    )
}
