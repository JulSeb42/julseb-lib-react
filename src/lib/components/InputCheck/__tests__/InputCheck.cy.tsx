/*=============================================== InputCheck tests ===============================================*/

import { InputCheck, cssVariables } from "../../.."

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
                cssVariables.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-radius", cssVariables.radiuses.m)
            .should("have.css", "padding", cssVariables.spacers.s)
    })

    it("renders a selector with validation", () => {
        cy.mount(
            <InputCheck
                id="input"
                data-testid="testid"
                variant="selector"
                validation="not-passed"
            >
                Hello
            </InputCheck>
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                cssVariables.colors.light["danger-50"].rgb
            )
            .should("have.css", "border-radius", "1584px")
            .should("have.css", "padding-left", cssVariables.spacers.m)
            .should("have.css", "padding-right", cssVariables.spacers.m)
            .should("have.css", "padding-top", cssVariables.spacers.xxs)
            .should("have.css", "padding-bottom", cssVariables.spacers.xxs)
    })
})
