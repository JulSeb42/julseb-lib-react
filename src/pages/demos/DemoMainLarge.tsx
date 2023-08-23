/*=============================================== DemoMainLarge ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export function DemoMainLarge() {
    return (
        <BasePage title="Demo Main Large">
            <StyledWrapper>
                <StyledMain size="large">
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
