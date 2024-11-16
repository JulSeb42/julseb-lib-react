/*=============================================== SrOnly tests ===============================================*/

import { SrOnly } from "../../.."

describe("<SrOnly />", () => {
    it("renders <SrOnly /> component", () => {
        cy.mount(
            <SrOnly data-testid="testid" className="className">
                Hello
            </SrOnly>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "width", "1px")
    })
})
