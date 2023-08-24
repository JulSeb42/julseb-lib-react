/*=============================================== Grid tests ===============================================*/

import { Grid } from "../Grid"
import { cssVariables } from "../../.."

describe("<Grid />", () => {
    it("renders <Grid /> component", () => {
        cy.mount(
            <Grid data-testid="testid" col={3} gap="s">
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
            </Grid>,
        )
        cy.dataTest("testid")
            .should("exist")
            .should("have.css", "gap", cssVariables.spacers.s)
    })

    it("renders the grid as a `p`", () => {
        cy.mount(
            <Grid data-testid="testid" as="p">
                <span>Hello</span>
            </Grid>,
        )
        cy.dataTest("testid").should("have.prop", "tagName", "P")
    })

    it("renders the grid inline", () => {
        cy.mount(
            <Grid data-testid="testid" inline>
                <span>Hello</span>
            </Grid>,
        )
        cy.dataTest("testid").should("have.css", "display", "inline-grid")
    })
})
