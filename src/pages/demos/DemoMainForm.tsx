/*=============================================== DemoMainForm ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export function DemoMainForm() {
    return (
        <BasePage title="Demo Main Form">
            <StyledWrapper>
                <StyledMain size="form">
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
