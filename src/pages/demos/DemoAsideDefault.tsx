import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export const DemoAsideDefault = () => {
    return (
        <BasePage title="Demo Aside Default">
            <StyledWrapper data-testid="testid" className="className">
                <StyledAside data-testid="testid" className="className">
                    <Text tag="h2">Aside</Text>
                </StyledAside>

                <StyledMain data-testid="testid" className="className">
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
