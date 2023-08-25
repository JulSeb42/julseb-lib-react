/*=============================================== Linkify tests ===============================================*/

import { Linkify } from "../Linkify"

describe("<Linkify />", () => {
    it("renders <Linkify /> component", () => {
        cy.mount(
            <Linkify data-testid="testid">
                Hello, visit https://julien-sebag.com/
            </Linkify>,
        )
        cy.dataTest("testid").should("exist").should("contain.html", "a")
    })
})
