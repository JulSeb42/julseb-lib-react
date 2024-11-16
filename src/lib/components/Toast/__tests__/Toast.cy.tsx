/*=============================================== Toast tests ===============================================*/

import { LIB_TOKENS, ToasterProviderWrapper } from "../../.."
import {
    PreviewError,
    PreviewSuccess,
    PreviewWarning,
    PreviewInfo,
} from "./Preview"

const triggerButton = () => cy.dataTest("trigger")

describe("<Toast />", () => {
    it("renders <Toast /> component", () => {
        cy.mount(
            <ToasterProviderWrapper data-testid="testid" className="className">
                <PreviewSuccess />
            </ToasterProviderWrapper>
        )

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("not.be.visible")

        cy.dataTest("Success").should("not.exist")

        triggerButton().click()

        cy.dataTest().should("be.visible")
        cy.dataTest("Success")
            .should("exist")
            .should("be.visible")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["success-500"].rgb
            )

        cy.wait(3000)

        cy.dataTest("Success").should("not.exist")
    })

    it("renders an error Toast", () => {
        cy.mount(
            <ToasterProviderWrapper data-testid="testid" className="className">
                <PreviewError />
            </ToasterProviderWrapper>
        )

        triggerButton().click()

        cy.dataTest("Error").should("exist")
        cy.dataTest("Error.Timer")
            .should("exist")
            .should("have.css", "animation-duration", "10s")

        cy.dataTest(
            "Error.TitleContainer.IconContainerRight.CloseButton"
        ).click()

        cy.dataTest("Error").should("not.exist")
    })

    it("renders with an icon", () => {
        cy.mount(
            <ToasterProviderWrapper
                data-testid="testid"
                className="className"
                toastOptions={{ duration: 1000000 }}
            >
                <PreviewWarning />
            </ToasterProviderWrapper>
        )

        triggerButton().click()

        cy.dataTest("Warning.TitleContainer.IconContainerLeft").should("exist")
    })

    it("renders a different position", () => {
        cy.mount(
            <ToasterProviderWrapper
                data-testid="testid"
                className="className"
                toastOptions={{ duration: 1000000 }}
                position="top-left"
            >
                <PreviewInfo />
            </ToasterProviderWrapper>
        )
        triggerButton().click()

        cy.dataTest()
            .should("have.css", "left", LIB_TOKENS.spacers.s)
            .should("have.css", "top", LIB_TOKENS.spacers.s)
    })
})
