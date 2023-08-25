/*=============================================== DemoAsideDefault ===============================================*/

import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export function DemoAsideDefault() {
    return (
        <BasePage title="Demo Aside Default">
            <StyledWrapper>
                <StyledAside>
                    <Text tag="h2">Aside</Text>
                </StyledAside>

                <StyledMain>
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
