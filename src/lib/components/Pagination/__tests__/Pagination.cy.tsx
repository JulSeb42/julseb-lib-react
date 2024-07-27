/*=============================================== Pagination tests ===============================================*/

import { LIB_TOKENS } from "../../.."
import { PaginationPreview, PaginationColor } from "./Preview"

describe("<Pagination />", () => {
    it("renders <Pagination /> component", () => {
        cy.mount(<PaginationPreview />)

        cy.dataTest().should("exist").should("have.class", "className")

        cy.dataTest("testid.PaginationButton.Previous")
            .should("exist")
            .should("have.class", "Previous")
            .should("be.disabled")

        cy.dataTest("testid.PaginationButton.Number")
            .should("exist")
            .should("have.length", 4)
            .should("have.class", "Number")
            .should("not.be.disabled")

        cy.dataTest("testid.PaginationButton.Number.Active")
            .should("exist")
            .should("have.length", 1)
            .should("not.be.disabled")
            .should("have.text", 1)
            .should("have.class", "Active")

        cy.dataTest("testid.PaginationButton.Number").eq(0).click()

        cy.dataTest("testid.PaginationButton.Number.Active").should(
            "have.text",
            2
        )
    })

    it("renders a limit and a different color", () => {
        cy.mount(<PaginationColor />)
        cy.dataTest("testid.PaginationButton.Number.Active").should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["secondary-500"].rgb
        )
        cy.dataTest("testid.PaginationButton.Number").should("have.length", 2)
        cy.dataTest("testid.PaginationButton.More")
            .should("exist")
            .should("have.length", 1)
            .should("have.text", "...")
    })

    // TODO
    // ? accentColor
    // ? pageLimit
    // ? queries
})
