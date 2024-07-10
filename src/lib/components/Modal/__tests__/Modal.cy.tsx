/*=============================================== Modal tests ===============================================*/

import { cssVariables } from "../../.."
import { Preview, PreviewWithAlert } from "./Preview"

const trigger = () => cy.dataTest("trigger")

describe("<Modal />", () => {
    it("renders <Modal /> component", () => {
        cy.mount(<Preview />)

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("not.be.visible")
            .should(
                "have.css",
                "background-color",
                cssVariables.overlays["black-80"]
            )
        trigger().click()

        cy.dataTest().should("be.visible")
        cy.get("body").should("have.class", "stop-scrolling")

        cy.dataTest("testid.ButtonClose").click()
        cy.dataTest().should("not.be.visible")
        cy.get("body").should("not.have.class", "stop-scrolling")

        trigger().click()
        cy.wait(200)

        cy.get("body").type("{esc}")
        cy.dataTest().should("not.be.visible")

        trigger().click()

        cy.get("body").click(0, 0)
        cy.dataTest().should("not.be.visible")
    })

    it("renders without button close and a max width", () => {
        cy.mount(<PreviewWithAlert />)

        trigger().click()
        cy.dataTest("testid.ButtonClose").should("not.exist")
        cy.get("body").type("{esc}")
        cy.dataTest().should("be.visible")
        cy.dataTest("testid.ModalContent").should("have.css", "width", "400px")
        cy.dataTest("close-modal").click()
        cy.dataTest().should("not.be.visible")
    })
})
