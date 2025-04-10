import { TimepickerDemo } from "./Preview"

describe("<Timepicker />", () => {
    it("renders <Timepicker /> component", () => {
        cy.mount(<TimepickerDemo />)
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest().click()
        cy.dataTest("testid.ListInput").should("be.visible")
        cy.dataTest("testid.ListInput")
        cy.dataTest("testid.ListItem").eq(22).click()
        cy.dataTest("testid.InputWrapper.InputTime").should(
            "have.value",
            "22:00"
        )
    })
})
