/*=============================================== InputCounter tests ===============================================*/

import {
    Preview,
    PreviewNotEditable,
    PreviewMinMax,
    PreviewTooltip,
} from "./Preview"

describe("<InputCounter />", () => {
    it("renders <InputCounter /> component", () => {
        cy.mount(<Preview />)
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.Button.Minus")
            .should("exist")
            .should("have.class", "Button__Minus")
        cy.dataTest("testid.Button.Minus.Icon")
            .should("exist")
            .should("have.class", "Button__Minus__Icon")
        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.class", "Input")
        cy.dataTest("testid.Button.Plus")
            .should("exist")
            .should("have.class", "Button__Plus")
        cy.dataTest("testid.Button.Plus.Icon")
            .should("exist")
            .should("have.class", "Button__Plus__Icon")

        cy.dataTest("testid.Input")
            .should("have.prop", "tagName", "INPUT")
            .should("have.value", "0")

        cy.dataTest("testid.Button.Plus").should(
            "have.attr",
            "aria-label",
            "Plus"
        )
        cy.dataTest("testid.Button.Minus").should(
            "have.attr",
            "aria-label",
            "Minus"
        )

        cy.dataTest("testid.Button.Plus").click()
        cy.dataTest("testid.Input").should("have.value", "1")

        cy.dataTest("testid.Button.Minus").click()
        cy.dataTest("testid.Input").should("have.value", "0")
    })

    it("renders a span when input is not editable", () => {
        cy.mount(<PreviewNotEditable />)
        cy.dataTest("testid.Input").should("not.exist")
        cy.dataTest("testid.Number").should("exist").should("have.text", "0")
    })

    it("renders with min, max, and step", () => {
        cy.mount(<PreviewMinMax />)
        cy.dataTest("testid.Input")
            .should("have.attr", "min", "1")
            .should("have.attr", "max", "5")
            .should("have.attr", "step", "3")
            .should("have.value", "1")

        cy.dataTest("testid.Button.Minus").should("be.disabled")
        cy.dataTest("testid.Button.Plus").should("not.be.disabled")

        cy.dataTest("testid.Button.Plus").click()
        cy.dataTest("testid.Input").should("have.value", "4")

        cy.dataTest("testid.Button.Minus").should("not.be.disabled")

        cy.dataTest("testid.Button.Plus").click()
        cy.dataTest("testid.Input").should("have.value", "5")
        cy.dataTest("testid.Button.Plus").should("be.disabled")

        cy.dataTest("testid.Button.Minus").click().click()
        cy.dataTest("testid.Button.Minus").should("be.disabled")
        cy.dataTest("testid.Input").should("have.value", "1")
    })

    it("renders a tooltip", () => {
        cy.mount(<PreviewTooltip />)
        cy.dataTest("testid.Button.Minus")
            .should("exist")
            .should("have.prop", "tagName", "DIV")
        cy.dataTest("testid.Button.Plus")
            .should("exist")
            .should("have.prop", "tagName", "DIV")

        cy.dataTest("testid.Button.Minus.Tooltip")
            .should("exist")
            .should("not.be.visible")
        cy.dataTest("testid.Button.Plus.Tooltip")
            .should("exist")
            .should("not.be.visible")
    })
})
