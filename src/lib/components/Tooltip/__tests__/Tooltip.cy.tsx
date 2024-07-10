/*=============================================== Tooltip tests ===============================================*/

import { Tooltip, libTokens } from "../../.."

describe("<Tooltip />", () => {
    it("renders <Tooltip /> component", () => {
        cy.mount(
            <Tooltip data-testid="testid" className="className" tooltip="Hello">
                Hello
            </Tooltip>
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.Tooltip")
            .should("exist")
            .should("have.class", "Tooltip")
            .should("not.be.visible")
            .should(
                "have.css",
                "background-color",
                libTokens.overlays["black-80"]
            )

        cy.dataTest().trigger("mouseover")
        cy.dataTest("testid.Tooltip").should("be.visible")

        cy.dataTest().trigger("mouseout")
        cy.dataTest("testid.Tooltip").should("not.be.visible")
    })

    it("shows the tooltip on click", () => {
        cy.mount(
            <Tooltip data-testid="testid" tooltip="Hello" trigger="click">
                Hello
            </Tooltip>
        )
        cy.dataTest("testid.Tooltip").should("not.be.visible")
        cy.dataTest().click()
        cy.dataTest("testid.Tooltip").should("be.visible")
    })
})
