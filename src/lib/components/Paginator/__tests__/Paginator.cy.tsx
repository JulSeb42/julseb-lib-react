/*=============================================== Paginator tests ===============================================*/

import { LIB_TOKENS } from "../../.."
import { Preview, PreviewNotEditable, PreviewColor } from "./Preview"

describe("<Paginator />", () => {
    const textContainer = () => cy.dataTest("testid.Text")
    const inputWrapper = () => cy.dataTest("testid.Text.Input")
    const input = () => cy.dataTest("testid.Text.Input.Input")
    const buttonPrev = () => cy.dataTest("testid.Button.Prev")
    const buttonNext = () => cy.dataTest("testid.Button.Next")
    const card = () => cy.dataTest("card")

    it("renders <Paginator /> component", () => {
        cy.mount(<Preview />)

        cy.dataTest().should("exist").should("have.class", "className")
        input().should("exist").should("have.value", 1)
        textContainer()
            .should("exist")
            .should("contain.text", "Page")
            .and("contain.text", "of 5")
        buttonPrev().should("be.disabled")
        buttonNext().should("not.be.disabled")
    })

    it("changes page on click of a button", () => {
        cy.mount(<Preview />)

        card().eq(0).should("have.text", "Hello 1")

        buttonNext().click()
        input().should("have.value", 2)
        card().eq(0).should("have.text", "Hello 21")
        buttonPrev().should("not.be.disabled")

        buttonPrev().click()
        card().eq(0).should("have.text", "Hello 1")
        buttonPrev().should("be.disabled")
    })

    it("sets the value to 1 when users types a lower value, and 5 when user types a higher value", () => {
        cy.mount(<Preview />)

        input().focus().type("{del}")
        input().should("have.value", 1)

        input().type("8")
        input().should("have.value", 5)
    })

    it("renders text instead of an input", () => {
        cy.mount(<PreviewNotEditable />)

        input().should("not.exist")
        textContainer().should("have.text", "A 1 b 5")
    })

    it("renders a different accent color", () => {
        cy.mount(<PreviewColor />)

        buttonNext().should(
            "have.css",
            "color",
            LIB_TOKENS.colors.light["secondary-500"].rgb
        )
        input().focus()
        inputWrapper().should(
            "have.css",
            "border-color",
            LIB_TOKENS.colors.light["secondary-500"].rgb
        )
    })
})
