/*=============================================== ProgressBar tests ===============================================*/

import { ProgressBar, LIB_TOKENS } from "../../.."

const PROGRESS_VALUE = 42

describe("<ProgressBar />", () => {
    it("renders <ProgressBar /> component", () => {
        cy.mount(
            <ProgressBar
                data-testid="testid"
                className="className"
                value={PROGRESS_VALUE}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    // ? value
    // ? color
    // ? animation
})
