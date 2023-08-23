/*=============================================== Aside tests ===============================================*/

import { Aside } from "../Aside"

describe("<Aside />", () => {
    it("renders <Aside /> component", () => {
        cy.mount(<Aside data-testid="testid">Hello</Aside>)

        cy.dataTest("testid").should("exist")
    })
})
