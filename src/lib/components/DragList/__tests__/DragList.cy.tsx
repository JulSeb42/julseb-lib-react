import { LIB_TOKENS } from "../../.."
import { DragListPreview } from "./Preview"

describe("<DragList />", () => {
    it("renders <DragList /> component", () => {
        cy.mount(<DragListPreview />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-style", "solid")
            .should("have.css", "border-width", "1px")
            .should("have.css", "padding", LIB_TOKENS.spacers.s)
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.m)
            .should("have.css", "gap", LIB_TOKENS.spacers.s)

        cy.dataTest("testid.DragListItem").should("have.length", 3)
    })
})
