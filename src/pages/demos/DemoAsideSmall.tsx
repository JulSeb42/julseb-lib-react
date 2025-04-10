import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export const DemoAsideSmall = () => {
    return (
        <BasePage title="Demo Aside Small">
            <StyledWrapper data-testid="testid" className="className">
                <StyledMain data-testid="testid" className="className">
                    <Text tag="h2">Main</Text>
                </StyledMain>

                <StyledAside
                    size="small"
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Aside</Text>
                </StyledAside>
            </StyledWrapper>
        </BasePage>
    )
}
