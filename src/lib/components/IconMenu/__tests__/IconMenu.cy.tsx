/*=============================================== IconMenu tests ===============================================*/

import { IconMenu, LIB_TOKENS } from "../../.."

describe("<IconMenu />", () => {
    it("renders <IconMenu /> component", () => {
        cy.mount(<IconMenu data-testid="testid" className="className">Hello</IconMenu>)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
        
        // ? check all default props
    })
})
