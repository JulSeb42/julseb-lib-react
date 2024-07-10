/*=============================================== Dropdown tests ===============================================*/

import { cssVariables } from "../../.."
import { Preview, PreviewDirection, PreviewColor } from "./Preview"

describe("<Dropdown />", () => {
    it("renders <Dropdown /> component", () => {
        cy.mount(<Preview />)
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.Dropdown")
            .should("exist")
            .should("have.class", "Dropdown")
            .should("not.be.visible")

        cy.dataTest("Button").click()
        cy.dataTest("testid.Dropdown").should("be.visible")

        cy.dataTest("testid.Dropdown.DropdownItem")
            .should("exist")
            .should("be.visible")

        const stub = cy.stub()
        cy.on("window:alert", stub)

        cy.dataTest("testid.Dropdown.DropdownItem")
            .last()
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith("Clicked icon")
            })

        cy.get("body").click()
        cy.dataTest("testid.Dropdown").should("not.be.visible")
    })

    it("renders a different direction & position from button", () => {
        cy.mount(<PreviewDirection />)

        cy.dataTest().should("have.css", "justify-content", "flex-end")
        cy.dataTest("testid.Dropdown")
            .should("have.css", "right", "0px")
            .should("have.css", "bottom", "48px")

        cy.dataTest("Button").click()
        cy.dataTest("testid.Dropdown").should("have.css", "max-height", "100px")
    })

    it("renders link or button and different accent color", () => {
        cy.mount(<PreviewColor />)
        cy.dataTest("Button").click()

        cy.dataTest("testid.Dropdown.DropdownItem").should(
            "have.css",
            "color",
            cssVariables.colors.light["danger-500"].rgb
        )

        cy.dataTest("testid.Dropdown.DropdownItem")
            .eq(0)
            .should("have.prop", "tagName", "A")
            .should("not.contain.html", "span")

        cy.dataTest("testid.Dropdown.DropdownItem")
            .eq(1)
            .should("have.prop", "tagName", "BUTTON")
            .should("not.contain.html", "span")

        cy.dataTest("testid.Dropdown.DropdownItem")
            .eq(2)
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.html", "span")
    })
})
