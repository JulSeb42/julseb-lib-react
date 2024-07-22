/*=============================================== MarkdownEditor tests ===============================================*/

import { MarkdownEditor, LIB_TOKENS } from "../../.."

describe("<MarkdownEditor />", () => {
    it("renders <MarkdownEditor /> component", () => {
        cy.mount(<MarkdownEditor data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
        
        // ? check all default props
    })
})
