/*=============================================== TextIconPage ===============================================*/

import { Page } from "../../components"
import { TextIcon } from "../../lib"

export function TextIconPage() {
    return (
        <Page title="TextIcon">
            <TextIcon icon="arrow-right" tag="h3" gap="l">
                Hello
            </TextIcon>
        </Page>
    )
}
