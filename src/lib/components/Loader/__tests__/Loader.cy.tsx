/*=============================================== Loader tests ===============================================*/

import { Loader, LIB_TOKENS } from "../../.."

describe("<Loader />", () => {
    it("renders <Loader /> component", () => {
        cy.mount(<Loader data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "border-left", "8px solid rgba(0, 0, 0, 0)")
            .should("have.css", "border-top", "8px solid rgba(0, 0, 0, 0)")
            .should("have.css", "border-right", "8px solid rgba(0, 0, 0, 0)")
            .should(
                "have.css",
                "border-bottom",
                `8px solid ${LIB_TOKENS.colors.light["primary-500"].rgb}`
            )
    })

    it("renders variant 2", () => {
        const borderWidth = 4

        cy.mount(
            <Loader
                data-testid="testid"
                variant={2}
                color="secondary"
                borderWidth={borderWidth}
            />
        )

        cy.dataTest()
            .should(
                "have.css",
                "border-left",
                `${borderWidth}px solid rgba(0, 0, 0, 0)`
            )
            .should(
                "have.css",
                "border-right",
                `${borderWidth}px solid rgba(0, 0, 0, 0)`
            )
            .should(
                "have.css",
                "border-top",
                `${borderWidth}px solid ${LIB_TOKENS.colors.light["secondary-500"].rgb}`
            )
            .should(
                "have.css",
                "border-bottom",
                `${borderWidth}px solid ${LIB_TOKENS.colors.light["secondary-500"].rgb}`
            )
    })

    it("renders variant 3", () => {
        cy.mount(<Loader data-testid="testid" variant={3} />)
        cy.dataTest()
            .children()
            .should("have.length", 4)
            .should("have.prop", "tagName", "SPAN")
    })

    it("renders variant 4", () => {
        cy.mount(<Loader data-testid="testid" variant={4} />)
        cy.dataTest()
            .should("exist")
            .children()
            .should("have.length", 3)
            .should("have.prop", "tagName", "SPAN")
    })
})
