/*=============================================== Datepicker tests ===============================================*/

import { DatepickerDemo } from "./Preview"

describe("<Datepicker />", () => {
    it("renders <Datepicker /> component", () => {
        cy.mount(<DatepickerDemo />)
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest().click()
        cy.dataTest().should("have.class", "Open")
        cy.dataTest("testid.Calendar.DaysContainer.CalendarDay").eq(0).click()
        cy.dataTest("testid.InputWrapper.InputDate").should(
            "have.value",
            "1 Aug 2024"
        )
        cy.dataTest().should("not.have.class", "Open")
    })

    it("has min and max dates", () => {
        cy.mount(<DatepickerDemo minDate="2024-08-23" maxDate="2024-08-24" />)
        cy.dataTest("testid.Calendar.Header.NavButton.Prev").should(
            "be.disabled"
        )
        cy.dataTest("testid.Calendar.Header.NavButton.Next").should(
            "be.disabled"
        )
        cy.dataTest("testid.Calendar.DaysContainer.CalendarDay")
            .eq(0)
            .should("be.disabled")
        cy.dataTest("testid.Calendar.DaysContainer.CalendarDay")
            .eq(22)
            .should("not.be.disabled")
        cy.dataTest("testid.Calendar.DaysContainer.CalendarDay")
            .eq(23)
            .should("not.be.disabled")
        cy.dataTest("testid.Calendar.DaysContainer.CalendarDay")
            .eq(24)
            .should("be.disabled")
    })
})
