/*=============================================== InputPhone tests ===============================================*/

import { Preview } from "./Preview"

describe("<InputPhone />", () => {
    beforeEach(() => {
        cy.mount(<Preview />)
    })
    it("renders <InputPhone /> component", () => {
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")

        cy.dataTest("testid.LeftContainer")
            .should("exist")
            .should("have.class", "LeftContainer")
        cy.dataTest("testid.LeftContainer.CountryButton")
            .should("exist")
            .should("have.class", "LeftContainer__CountryButton")
        cy.dataTest("testid.LeftContainer.CountryButton.Flag")
            .should("exist")
            .should("have.class", "LeftContainer__CountryButton__Flag")
        cy.dataTest("testid.LeftContainer.CountryButton.CaretIcon")
            .should("exist")
            .should("have.class", "LeftContainer__CountryButton__CaretIcon")
        cy.dataTest("testid.LeftContainer.CountryCode")
            .should("exist")
            .should("have.class", "LeftContainer__CountryCode")
            .should("have.text", "+49")
        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.class", "Input")
            .should("have.attr", "type", "tel")
        cy.dataTest("testid.ListInput")
            .should("exist")
            .should("have.class", "ListInput")
            .should("not.be.visible")
    })

    it("opens a list of countries with their dial code", () => {
        cy.dataTest("testid.ListInput").should("not.be.visible")
        cy.dataTest("testid.LeftContainer.CountryButton").click()
        cy.dataTest("testid.ListInput").should("be.visible")
        cy.dataTest("testid.ListInput.SearchContainer.Input").focus().type("fr")
        cy.dataTest("testid.ListInput").children().eq(2).click()
        cy.dataTest("testid.LeftContainer.CountryCode").should(
            "have.text",
            "+33"
        )
    })
})
