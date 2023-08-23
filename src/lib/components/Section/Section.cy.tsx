/*=============================================== Section tests ===============================================*/

import { Section } from "./Section"

describe("<Section />", () => {
    it("renders <Section /> component", () => {
        cy.mount(<Section data-testid="testid">Hello</Section>)

        cy.dataTest("testid").should("exist")
    })
})
