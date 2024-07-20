/*=============================================== ProgressCircle tests ===============================================*/

import { ProgressCircle, cssVariables } from "../../.."

describe("<ProgressCircle />", () => {
    it("renders <ProgressCircle /> component", () => {
        cy.mount(<ProgressCircle data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
        
        // ? check all default props
    })
})
