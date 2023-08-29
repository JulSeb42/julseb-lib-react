/*=============================================== Flexbox tests ===============================================*/

import { Flexbox } from "../Flexbox"
import { cssVariables } from "../../.."

describe("<Flexbox />", () => {
    it("renders <Flexbox /> component", () => {
        cy.mount(
            <Flexbox data-testid="testid" flexDirection="column" gap="s">
                Hello
            </Flexbox>
        )
        cy.dataTest("testid")
            .should("exist")
            .should("have.css", "flex-direction", "column")
            .should("have.css", "gap", cssVariables.spacers.s)
    })
})
