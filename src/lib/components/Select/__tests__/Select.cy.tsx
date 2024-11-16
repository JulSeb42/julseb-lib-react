/*=============================================== Select tests ===============================================*/

import { SelectPreview, SelectWithOptions } from "./Preview"

describe("<Select />", () => {
    it("renders <Select /> component", () => {
        cy.mount(<SelectPreview />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "BUTTON")
            .should("have.text", "selected")
        cy.dataTest("testid.Button.Caret").should("not.exist")
    })

    it("selects an option", () => {
        cy.mount(<SelectWithOptions />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")

        cy.dataTest("testid.Button.Caret").should("exist").should("be.visible")

        cy.dataTest("testid.ListInput").should("exist").should("not.be.visible")

        cy.dataTest("testid.SelectContainer.SelectButton")
            .should("exist")
            .should("have.text", "react")
            .click()

        cy.dataTest("testid.ListInput").children().eq(1).click()

        cy.dataTest("testid.SelectContainer.SelectButton").should(
            "have.text",
            "javascript"
        )
    })

    it("closes when clicking outside", () => {
        cy.mount(<SelectWithOptions />)
        cy.dataTest("testid.SelectContainer.SelectButton").click()
        cy.dataTest("testid.ListInput").should("be.visible")
        cy.get("body").click(0, 0)
        cy.dataTest("testid.ListInput").should("not.be.visible")
    })
})
