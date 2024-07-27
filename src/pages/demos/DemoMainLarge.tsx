/*=============================================== DemoMainLarge ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export function DemoMainLarge() {
    return (
        <BasePage title="Demo Main Large">
            <StyledWrapper data-testid="testid" className="className">
                <StyledMain
                    size="large"
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
