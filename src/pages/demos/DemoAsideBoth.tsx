import { Text } from "../../lib"
import {
    BasePage,
    StyledWrapper,
    StyledMain,
    StyledAside,
} from "../../components"

export const DemoAsideBoth = () => {
    return (
        <BasePage title="Demo Aside Both Sides">
            <StyledWrapper data-testid="testid" className="className">
                <StyledAside
                    // size={100}
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Aside</Text>
                </StyledAside>

                <StyledMain data-testid="testid" className="className">
                    <Text tag="h2">Main</Text>
                </StyledMain>

                <StyledAside
                    // size={100}
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Aside</Text>
                </StyledAside>
            </StyledWrapper>
        </BasePage>
    )
}
