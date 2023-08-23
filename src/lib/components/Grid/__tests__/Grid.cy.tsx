/*=============================================== Grid tests ===============================================*/

import { Grid } from "../Grid"

describe("<Grid />", () => {
    it("renders <Grid /> component", () => {
        cy.mount(<Grid data-testid="testid">Hello</Grid>)

        cy.dataTest("testid").should("exist")
    })
})
