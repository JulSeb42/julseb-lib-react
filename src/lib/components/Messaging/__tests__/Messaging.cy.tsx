/*=============================================== Messaging tests ===============================================*/

import { MessagingPreview, MessagingEmptyPreview } from "./Preview"

describe("<Messaging />", () => {
    const input = () => cy.dataTest("testid.Form.Input")
    const message = () => cy.dataTest("testid.MessagesList.Message")
    const emptyText = () => cy.dataTest("testid.MessagesList.EmptyText")
    const submitButton = () => cy.dataTest("testid.Form.SubmitButton")

    it("renders <Messaging /> component", () => {
        cy.mount(<MessagingPreview />)
        cy.dataTest().should("exist").should("have.class", "className")
        message().should("exist").should("have.length", 4)
        submitButton().should("be.disabled")
        input().focus().type("Hello")
        submitButton().should("not.be.disabled")
        submitButton().click()
        message().should("have.length", 5)
    })

    it("renders an empty state", () => {
        cy.mount(<MessagingEmptyPreview />)
        message().should("not.exist")
        emptyText().should("exist")
        input().focus().type("Hello")
        submitButton().click()
        emptyText().should("not.exist")
        message().should("exist").should("have.length", 1)
    })
})
