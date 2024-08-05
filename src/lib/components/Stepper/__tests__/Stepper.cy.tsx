/*=============================================== Stepper tests ===============================================*/

import { Stepper, LIB_TOKENS } from "../../.."
import { stepperTestsData, ACTIVE_STEP } from "./data"

describe("<Stepper />", () => {
    it("renders <Stepper /> component", () => {
        cy.mount(
            <Stepper
                data-testid="testid"
                className="className"
                steps={stepperTestsData}
                activeStep={ACTIVE_STEP}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("renders a passed state", () => {
        cy.mount(
            <Stepper
                data-testid="testid"
                className="className"
                steps={stepperTestsData}
                activeStep={ACTIVE_STEP}
            />
        )

        cy.dataTest("passed").should("exist").should("have.attr", "href")
        cy.dataTest("passed.NumberContainer").should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["primary-500"].rgb
        )
        cy.dataTest("passed.NumberContainer.Icon").should(
            "have.prop",
            "tagName",
            "svg"
        )
    })

    it("renders an active state", () => {
        cy.mount(
            <Stepper
                data-testid="testid"
                className="className"
                steps={stepperTestsData}
                activeStep={ACTIVE_STEP}
            />
        )

        cy.dataTest("active").should("exist").should("have.attr", "href")
        cy.dataTest("passed.NumberContainer").should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["primary-500"].rgb
        )
        cy.dataTest("active.NumberContainer.Icon").should("not.exist")
        cy.dataTest("active.NumberContainer").should("have.text", "2")
    })

    it("renders a next state", () => {
        cy.mount(
            <Stepper
                data-testid="testid"
                className="className"
                steps={stepperTestsData}
                activeStep={ACTIVE_STEP}
            />
        )

        cy.dataTest("next")
            .should("exist")
            .should("have.prop", "tagName", "BUTTON")
        cy.dataTest("next.NumberContainer").should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["primary-300"].rgb
        )
        cy.dataTest("next.NumberContainer").should("have.text", "3")
    })

    it("renders vertically", () => {
        cy.mount(
            <Stepper
                data-testid="testid"
                className="className"
                steps={stepperTestsData}
                activeStep={ACTIVE_STEP}
                direction="column"
            />
        )

        cy.dataTest().should("have.css", "flex-direction", "column")
    })
})
