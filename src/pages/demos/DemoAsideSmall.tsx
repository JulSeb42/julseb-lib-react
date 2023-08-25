/*=============================================== DemoAsideSmall ===============================================*/

import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export function DemoAsideSmall() {
    return (
        <BasePage title="Demo Aside Small">
            <StyledWrapper>
                <StyledMain>
                    <Text tag="h2">Main</Text>
                </StyledMain>

                <StyledAside size="small">
                    <Text tag="h2">Aside</Text>
                </StyledAside>
            </StyledWrapper>
        </BasePage>
    )
}
