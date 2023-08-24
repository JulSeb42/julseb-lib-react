/*=============================================== Highlight tests ===============================================*/

import { Highlight } from "../Highlight"

describe("<Highlight />", () => {
    it("renders <Highlight /> component", () => {
        cy.mount(
            <Highlight data-testid="testid" highlightedText="">
                Hello world
            </Highlight>,
        )
        cy.dataTest("testid").should("exist")
    })

    it("highlights selected text", () => {
        cy.mount(
            <Highlight data-testid="testid" highlightedText="hello">
                Hello world
            </Highlight>,
        )
        cy.dataTest("testid").get("strong").should("have.text", "Hello")
    })
})
