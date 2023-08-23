/*=============================================== Text tests ===============================================*/

import { Text } from "./Text"

describe("<Text />", () => {
    it("renders <Text /> component", () => {
        cy.mount(<Text data-testid="testid">Hello</Text>)

        cy.dataTest("testid").should("exist")
    })
})
