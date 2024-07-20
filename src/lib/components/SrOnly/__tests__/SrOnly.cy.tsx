/*=============================================== SrOnly tests ===============================================*/

import { SrOnly, cssVariables } from "../../.."

describe("<SrOnly />", () => {
    it("renders <SrOnly /> component", () => {
        cy.mount(<SrOnly data-testid="testid" className="className">Hello</SrOnly>)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
        
        // ? check all default props
    })
})
