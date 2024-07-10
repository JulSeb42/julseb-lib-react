/*=============================================== Flexbox tests ===============================================*/

import { Flexbox, cssVariables } from "../../.."

describe("<Flexbox />", () => {
    it("renders <Flexbox /> component", () => {
        cy.mount(
            <Flexbox
                data-testid="testid"
                className="className"
                flexDirection="column"
                gap="s"
            >
                Hello
            </Flexbox>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "flex-direction", "column")
            .should("have.css", "gap", cssVariables.spacers.s)
    })
})
