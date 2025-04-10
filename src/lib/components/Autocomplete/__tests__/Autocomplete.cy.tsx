import { Preview } from "./Preview"

describe("<Autocomplete />", () => {
    beforeEach(() => {
        cy.mount(<Preview />)
    })

    it("renders <Autocomplete /> component", () => {
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")
        cy.dataTest("testid.Input").should("exist")
        cy.dataTest("testid.ListInput").should("exist")
    })

    it("filters a list of items when typing", () => {
        cy.dataTest("testid.Input").click().type("a")
        cy.dataTest("testid.ListInput")
            .children()
            .eq(0)
            .should("have.text", "Abbaretz")

        cy.dataTest("testid.Input").click().type("n")
        cy.dataTest("testid.ListInput")
            .children()
            .eq(0)
            .should("have.text", "Ancenis")
    })

    it("enables keyboard navigation", () => {
        cy.dataTest("testid.Input").should("have.value", "")
        cy.dataTest("testid.Input").click().type("b{downArrow}").type("{enter}")
        cy.dataTest("testid")
    })
})
