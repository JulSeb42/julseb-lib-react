import { Section, LIB_TOKENS } from "../../.."

describe("<Section />", () => {
    it("renders <Section /> component", () => {
        cy.mount(
            <Section data-testid="testid" className="className">
                Hello
            </Section>
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("sets the gap to 24px", () => {
        cy.mount(
            <Section data-testid="testid" gap="l">
                Hello
            </Section>
        )

        cy.dataTest()
            .should("exist")
            .should("have.css", "gap", LIB_TOKENS.spacers.l)
    })
})
