/*=============================================== DemoMainForm ===============================================*/

import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export const DemoMainForm = () => {
    return (
        <BasePage title="Demo Main Form">
            <StyledWrapper data-testid="testid" className="className">
                <StyledMain
                    size="form"
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
