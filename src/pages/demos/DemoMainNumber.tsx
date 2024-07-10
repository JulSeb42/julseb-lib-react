/*=============================================== DemoMainNumber ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export function DemoMainNumber() {
    return (
        <BasePage title="Demo Main Number">
            <StyledWrapper>
                <StyledMain size={200}>
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
