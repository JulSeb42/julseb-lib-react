/*=============================================== DemoMainDefault ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export function DemoMainDefault() {
    return (
        <BasePage title="Demo Main Default">
            <StyledWrapper>
                <StyledMain>
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
