/*=============================================== InputCheck tests ===============================================*/

import { InputCheck, libTokens } from "../../.."

describe("<InputCheck />", () => {
    it("renders <InputCheck /> component", () => {
        cy.mount(
            <InputCheck id="input" data-testid="testid" className="className">
                Hello
            </InputCheck>
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.class", "Input")
            .should("have.attr", "type", "checkbox")
        cy.dataTest("testid.CheckContainer")
            .should("exist")
            .should("have.class", "CheckContainer")
        cy.dataTest("testid.CheckContainer.Checkbox")
            .should("exist")
            .should("have.class", "CheckContainer__Checkbox")
        cy.dataTest("testid.CheckContainer.Checkbox.Icon")
            .should("exist")
            .should("not.be.visible")
            .should("have.class", "CheckContainer__Checkbox__Icon")
        cy.dataTest().click()
        cy.dataTest("testid.CheckContainer.Checkbox.Icon").should("be.visible")
    })

    it("renders a radio input", () => {
        cy.mount(
            <InputCheck id="input" data-testid="testid" type="radio">
                Hello
            </InputCheck>
        )
        cy.dataTest("testid.Input").should("have.attr", "type", "radio")
    })

    it("renders a toggle", () => {
        cy.mount(
            <InputCheck id="input" data-testid="testid" variant="toggle">
                Hello
            </InputCheck>
        )
        cy.dataTest("testid.CheckContainer.Toggle").should("exist")
    })

    it("renders a tile with radio", () => {
        cy.mount(
            <InputCheck
                id="input"
                data-testid="testid"
                type="radio"
                variant="tile"
            >
                Hello
            </InputCheck>
        )
        cy.dataTest()
            .should(
                "have.css",
                "border-color",
                libTokens.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-radius", libTokens.radiuses.m)
            .should("have.css", "padding", libTokens.spacers.s)
    })

    it("renders a selector with validation", () => {
        cy.mount(
            <InputCheck
                id="input"
                data-testid="testid"
                variant="selector"
                validation={false}
            >
                Hello
            </InputCheck>
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["danger-50"].rgb
            )
            .should("have.css", "border-radius", "1584px")
            .should("have.css", "padding-left", libTokens.spacers.m)
            .should("have.css", "padding-right", libTokens.spacers.m)
            .should("have.css", "padding-top", libTokens.spacers.xxs)
            .should("have.css", "padding-bottom", libTokens.spacers.xxs)
    })
})
