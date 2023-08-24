/*=============================================== Section tests ===============================================*/

import { Section } from "../Section"

import { cssVariables } from "../../.."

describe("<Section />", () => {
    it("renders <Section /> component", () => {
        cy.mount(<Section data-testid="testid">Hello</Section>)
        cy.dataTest("testid").should("exist")
    })

    it("sets the gap to 24px", () => {
        cy.mount(
            <Section data-testid="testid" gap="l">
                Hello
            </Section>,
        )

        cy.dataTest("testid")
            .should("exist")
            .should("have.css", "gap", cssVariables.spacers.l)
    })
})
