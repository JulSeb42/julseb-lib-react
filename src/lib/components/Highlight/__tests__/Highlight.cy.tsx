import { Highlight } from "../../../"

describe("<Highlight />", () => {
    it("renders <Highlight /> component", () => {
        cy.mount(
            <Highlight
                data-testid="testid"
                className="className"
                highlightedText="hello"
            >
                Hello world
            </Highlight>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .children()
            .should("have.prop", "tagName", "STRONG")
            .should("have.class", "HighlightedText")
    })

    it("highlights selected text", () => {
        cy.mount(
            <Highlight data-testid="testid" highlightedText="hello" tag="small">
                Hello world
            </Highlight>
        )
        cy.dataTest().get("strong").should("have.text", "Hello")
    })
})
