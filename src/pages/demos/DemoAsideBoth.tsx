/*=============================================== DemoAsideBoth ===============================================*/

import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export function DemoAsideBoth() {
    return (
        <BasePage title="Demo Aside Both Sides">
            <StyledWrapper>
                <StyledAside size={100}>
                    <Text tag="h2">Aside</Text>
                </StyledAside>

                <StyledMain>
                    <Text tag="h2">Main</Text>
                </StyledMain>

                <StyledAside size={100}>
                    <Text tag="h2">Aside</Text>
                </StyledAside>
            </StyledWrapper>
        </BasePage>
    )
}
