/*=============================================== DemoMainDefault ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export const DemoMainDefault = () => {
    return (
        <BasePage title="Demo Main Default">
            <StyledWrapper data-testid="testid" className="className">
                <StyledMain data-testid="testid" className="className">
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
