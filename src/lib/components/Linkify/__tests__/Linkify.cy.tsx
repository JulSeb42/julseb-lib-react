/*=============================================== Linkify tests ===============================================*/

import { Linkify } from "../../../"

describe("<Linkify />", () => {
    it("renders <Linkify /> component", () => {
        cy.mount(
            <Linkify data-testid="testid" className="className">
                Hello, visit https://julien-sebag.com/
            </Linkify>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("contain.html", "a")
            .get("a")
            .should("have.class", "Linkify")
    })

    it("renders with a target blank", () => {
        cy.mount(
            <Linkify data-testid="testid" className="className" blank>
                Hello, visit https://julien-sebag.com/
            </Linkify>
        )
        cy.dataTest().get("a").should("have.attr", "target", "_blank")
    })
})
