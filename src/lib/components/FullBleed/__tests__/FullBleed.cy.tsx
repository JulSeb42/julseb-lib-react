/*=============================================== FullBleed tests ===============================================*/

import { FullBleed, Image } from "../../.."

describe("<FullBleed />", () => {
    it("renders <FullBleed /> component", () => {
        cy.mount(
            <FullBleed data-testid="testid" className="className">
                Hello
            </FullBleed>
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("renders the image inside with a set height", () => {
        cy.mount(
            <FullBleed data-testid="testid" height={150}>
                <Image
                    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Full bleed"
                    fit="cover"
                />
            </FullBleed>
        )
        cy.dataTest().children().invoke("height").should("equal", 150)
    })
})
