/*=============================================== Grid tests ===============================================*/

import { Grid, libTokens } from "../../.."

describe("<Grid />", () => {
    it("renders <Grid /> component", () => {
        cy.mount(
            <Grid data-testid="testid" className="className" col={3} gap="s">
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
            </Grid>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "gap", libTokens.spacers.s)
    })

    it("renders the grid as a `p`", () => {
        cy.mount(
            <Grid data-testid="testid" as="p">
                <span>Hello</span>
            </Grid>
        )
        cy.dataTest().should("have.prop", "tagName", "P")
    })

    it("renders the grid inline", () => {
        cy.mount(
            <Grid data-testid="testid" inline>
                <span>Hello</span>
            </Grid>
        )
        cy.dataTest().should("have.css", "display", "inline-grid")
    })
})
