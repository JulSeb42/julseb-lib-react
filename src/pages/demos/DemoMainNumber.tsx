import type { FC } from "react"
import { Text } from "../../lib"
import { BasePage, StyledWrapper, StyledMain } from "../../components"

export const DemoMainNumber: FC = () => {
    return (
        <BasePage title="Demo Main Number">
            <StyledWrapper data-testid="testid" className="className">
                <StyledMain
                    size={200}
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Main</Text>
                </StyledMain>
            </StyledWrapper>
        </BasePage>
    )
}
