/*=============================================== Main tests ===============================================*/

import { Main } from "./Main"

describe("<Main />", () => {
    it("renders <Main /> component", () => {
        cy.mount(<Main data-testid="testid">Hello</Main>)

        cy.dataTest("testid").should("exist")
    })
})
