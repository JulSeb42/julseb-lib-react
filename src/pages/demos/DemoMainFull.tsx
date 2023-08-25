/*=============================================== DemoMainFull ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledMain } from "../../components"

export function DemoMainFull() {
    return (
        <BasePage title="Demo Main Full">
            <StyledMain size="full">
                <Text tag="h2">Main</Text>
            </StyledMain>
        </BasePage>
    )
}
