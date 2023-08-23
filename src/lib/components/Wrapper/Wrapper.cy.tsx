/*=============================================== Wrapper tests ===============================================*/

import { Wrapper } from "./Wrapper"

describe("<Wrapper />", () => {
    it("renders <Wrapper /> component", () => {
        cy.mount(<Wrapper data-testid="testid">Hello</Wrapper>)

        cy.dataTest("testid").should("exist")
    })
})
