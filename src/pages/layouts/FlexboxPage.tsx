/*=============================================== FlexboxPage ===============================================*/

import { Page, GridItem } from "../../components"
import { Flexbox } from "../../lib"

export function FlexboxPage() {
    return (
        <Page title="Flexbox">
            <Flexbox
                flexDirection="column-reverse"
                rowGap="xs"
                alignItems="flex-end"
                justifyContent="flex-end"
            >
                <GridItem />
                <GridItem>Longer item</GridItem>
                <GridItem />
                <GridItem>Even longer item</GridItem>
            </Flexbox>
        </Page>
    )
}
