import { MarkdownEditorPreview } from "./Preview"

describe("<MarkdownEditor />", () => {
    it("renders <MarkdownEditor /> component", () => {
        cy.mount(
            <MarkdownEditorPreview data-testid="testid" className="className" />
        )
        cy.dataTest().should("exist").should("have.class", "className")

        cy.dataTest("testid.EditorContainer.ContainerGrid.Textarea")
            .should("exist")
            .should("have.value", "")

        cy.dataTest("testid.EditorContainer.ContainerGrid.Textarea")
            .focus()
            .type("# Hello\nworld")

        cy.dataTest("testid.EditorContainer.ContainerGrid.Textarea").should(
            "have.value",
            "# Hello\nworld"
        )
        cy.dataTest("testid.EditorContainer.ContainerGrid.MarkdownContent")
            .should("exist")
            .children()
            .eq(0)
            .should("have.prop", "tagName", "H1")
    })

    it("adds markdown on click of a button", () => {
        cy.mount(
            <MarkdownEditorPreview data-testid="testid" className="className" />
        )
        cy.dataTest("testid.EditorContainer.ContainerGrid.Textarea").should(
            "have.value",
            ""
        )

        cy.dataTest(
            "testid.EditorContainer.ButtonsContainer.ActionButtonsContainer.ActionButton.Button"
        )
            .eq(1)
            .click()
        cy.dataTest("testid.EditorContainer.ContainerGrid.Textarea").should(
            "have.value",
            "* *"
        )
    })
})
